import React, { useState, useEffect } from "react";

export default function AdminDashboard({ admin }) {
  const [rooms, setRooms] = useState([]);
  const [msg, setMsg] = useState("");
  const [roomname, setRoomname] = useState("");
  const [roomsize, setRoomsize] = useState("");
  const [capacity, setCapacity] = useState("");

  const fetchRooms = async () => {
    const res = await fetch("http://localhost:5000/Admin/get-all-rooms");
    console.log(res);
    const data = await res.json();
    setRooms(data);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/Admin/add-conference-room", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomname,
        roomsize,
        capacity,
        ownerId: admin.id,
      }),
    });
    const data = await res.json();
    setMsg(data.message);
    fetchRooms();
  };

  const handleDelete = async (roomId) => {
    await fetch(`http://localhost:5000/Admin/delete-rooms`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: roomId,
      }),
    });
    fetchRooms();
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleCreate}>
        <input
          placeholder="Room Name"
          value={roomname}
          onChange={(e) => setRoomname(e.target.value)}
        />
        <input
          placeholder="Room Size"
          value={roomsize}
          onChange={(e) => setRoomsize(e.target.value)}
        />
        <input
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <button type="submit">Create Room</button>
      </form>
      <div>{msg}</div>
      <h3>All Rooms</h3>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>
            {/* {console.log(room)} */}
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
            <button onClick={() => handleDelete(room._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
