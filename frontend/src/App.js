import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminRegister from "./components/AdminRegister";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import RoomList from "./components/RoomList";
import BookSlot from "./components/BookSlot";
import "./index.css";

function App() {
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/admin/login">Admin Login</Link> |{" "}
        <Link to="/admin/register">Admin Register</Link> |{" "}
        <Link to="/user/login">User Login</Link> |{" "}
        <Link to="/user/register">User Register</Link> |{" "}
        {/* <Link to="/rooms">Rooms</Link> */}
      </nav>
      <Switch>
        <Route path="/admin/login">
          <AdminLogin setAdmin={setAdmin} />
        </Route>
        <Route path="/admin/register" component={AdminRegister} />
        <Route path="/user/login">
          <UserLogin setUser={setUser} />
        </Route>
        <Route path="/user/register" component={UserRegister} />
        <Route path="/admin/dashboard">
          {admin ? (
            <AdminDashboard admin={admin} />
          ) : (
            <Redirect to="/admin/login" />
          )}
        </Route>
        <Route path="/user/dashboard">
          {user ? <UserDashboard user={user} /> : <Redirect to="/user/login" />}
        </Route>
        <Route path="/rooms/:roomId/book" component={BookSlot} />
        <Route path="/rooms" component={RoomList} />
        <Route path="/">
          <h2>Welcome to Room Booking App</h2>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
