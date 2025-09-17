import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function UserLogin({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/User/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    console.log(data);
    if (data.token) {
      setUser({ username, token: data.token, id: data.user.id });
      localStorage.setItem("user", JSON.stringify(data.user));
      history.push("/user/dashboard");
    } else {
      setMsg(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Login</h2>
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
