import React, { useState, useEffect } from "react";

export default function UserDashboard({ user }) {
  const [rooms, setRooms] = useState([]);
  const [msg, setMsg] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Fetch all rooms
  useEffect(() => {
    fetch("http://localhost:5000/Admin/get-all-rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  // Book room
  const handleBook = async (e) => {
    e.preventDefault();
    console.log(selectedRoom, date, startTime, endTime, user.id);
    if (!selectedRoom) {
      setMsg("Please select a room to book.");
      return;
    }
    const res = await fetch(`http://localhost:5000/User/book/${selectedRoom}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date,
        startTime,
        endTime,
        userId: user.id,
      }),
    });
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <h3>All Rooms</h3>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>
            {/* {room.roomname} (Capacity: {room.capacity}) */}
            {room.roomname}
            <br></br>Capacity: {room.capacity}
            <br></br>Amenities: {room.amenities}
            <br></br>Room Size: {room.roomsize}
            <br></br>
            {room.bookings && room.bookings.length > 0 ? (
              room.bookings.map((booking, idx) => (
                <div
                  key={idx}
                  style={{
                    border: "1px solid #ccc",
                    margin: "8px",
                    padding: "8px",
                  }}
                >
                  <div>
                    <strong>Date:</strong>{" "}
                    {new Date(booking.date).toLocaleDateString()}
                  </div>
                  <div>
                    <strong>Slots:</strong>
                    <ul>
                      {booking.slots.map((slot, sidx) => (
                        <li key={sidx}>
                          {slot.startTime} - {slot.endTime} (Booked By:{" "}
                          {slot.bookedBy})
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            ) : (
              <div>No bookings yet.</div>
            )}
            <button onClick={() => setSelectedRoom(room._id)}>Book</button>
          </li>
        ))}
      </ul>
      {selectedRoom && (
        <form onSubmit={handleBook}>
          <h4>Book Room</h4>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            placeholder="Start Time (HH:MM)"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <input
            placeholder="End Time (HH:MM)"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <button type="submit">Book Slot</button>
        </form>
      )}
      <div>{msg}</div>
    </div>
  );
}
