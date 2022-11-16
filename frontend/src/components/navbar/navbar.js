import React from "react";
import { Navbar } from "react-bootstrap";
import "./navbar.css";
import Logo from "../../assets/logos/logo2.png";

export default class navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="dark">
        <nav>
          <a href="../login">
            <img src={Logo} alt="logo" />
          </a>
        </nav>
      </Navbar>
    );
  }
}
