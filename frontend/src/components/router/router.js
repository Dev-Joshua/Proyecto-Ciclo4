//Direccionamiento
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../register/register";
import Login from "../login/login";
import Image from "../../assets/img/404.jpg";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          path="/*"
          element={
            <div>
              <img src={Image} alt="404" />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
