import React from "react";
import { Navbar } from "react-bootstrap";
import "./navbar.css";
import Logo from "../../assets/logos/logo2.png";

export default class navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="dark">
        <nav>
          <a href="./login.js">
            <img src={Logo} alt="logo" />
          </a>
        </nav>
      </Navbar>
    );
  }
}
