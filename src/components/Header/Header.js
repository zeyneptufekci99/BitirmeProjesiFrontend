import "./Header.style.css";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from "react";
class Header extends React.Component {
  render() {
    return (
      <div className="headerBase">
        <NavLink className="span" to={"/"}>
          <span>Bitirme Projesi</span>
        </NavLink>
        <div className="optionContainer">
          <NavLink className="options" to={"/events"}>
            <span>Events</span>
          </NavLink>
          <NavLink className="options" to={"/profile"}>
            <span>Profile</span>
          </NavLink>
          <NavLink className="options" to={"/contact"}>
            <span>Contact</span>
          </NavLink>
        </div>

        <div className="iconContainer">
          <NavLink
            className="span"
            to={this.props.isSignIn ? "/profile" : "/sign-in"}
          >
            <FaRegUser className="icon"></FaRegUser>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
