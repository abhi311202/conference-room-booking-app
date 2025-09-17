import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function BookSlot() {
  const { roomId } = useParams();
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [userId, setUserId] = useState(""); // In real app, get from auth
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/User/book/${roomId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, startTime, endTime, userId }),
    });
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Slot for Room</h2>
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
      <input
        placeholder="Your User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button type="submit">Book</button>
      <div>{msg}</div>
    </form>
  );
}
