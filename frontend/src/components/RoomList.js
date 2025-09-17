import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/Admin/get-all-rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <div>
      <h2>Conference Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>
            {room.roomname} (Capacity: {room.capacity}){" "}
            <Link to={`/rooms/${room._id}/book`}>Book Slot</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
