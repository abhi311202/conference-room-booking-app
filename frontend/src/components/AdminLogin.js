import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function AdminLogin({ setAdmin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/Admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data) {
      console.log(data);
      console.log(data.admin);
      localStorage.setItem("admin", JSON.stringify(data.admin));
      setAdmin({ username, token: data.token, id: data.admin.id });
      history.push("/admin/dashboard");

      // SET ITEM IN LOCAL STORAGE
    } else {
      setMsg(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin Login</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      <div>{msg}</div>
    </form>
  );
}
