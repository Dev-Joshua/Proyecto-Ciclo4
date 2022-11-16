//Direccionamiento
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../register/register";
import Login from "../login/login";
import Image from "../../assets/img/404.jpg";
import Navbar from "../navbar/navbar";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <div>
              <Navbar />
              <img style={{ width: "100%" }} src={Image} alt="404" />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
