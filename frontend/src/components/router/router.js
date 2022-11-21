//Direccionamiento
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "../register/register";
import Login from "../login/login";
import Image from "../../assets/img/404.jpg";
import Navbar from "../navbar/navbar";
import Home from "../beginning/home";
import Add from "../add-ad/add_ad";
import Info from "../info/info";
import Profile from "../profile/profile";
import PublishingAd from "../publishing/publishing";
import PrivateRoute from "../auth/privaterouter";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/login"]} component={Login} />
        <Route exact path="/" component={Login} />
        <Route exact path={["/register"]} component={Register} />
        <PrivateRoute exact path={["/home"]} component={Home} />
        <Route exact path={["/add_ad"]} component={Add} />
        <Route exact path={["/info"]} component={Info} />
        <Route exact path={["/profile"]} component={Profile} />
        <Route exact path={["/publishing"]} component={PublishingAd} />
        <Route
          path={"*"}
          component={() => (
            <div>
              <Navbar />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{ backgroundPosition: "center", width: "40%" }}
                  src={Image}
                  alt="404"
                />
                <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                  Pagina no encontrada
                </h1>
              </div>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}
