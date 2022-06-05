import "./Header.style.css";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

const Header = ({ isAuth, roleId }) => {
  return (
    <div className="headerBase">
      <NavLink className="span" to={"/"}>
        <span>Bitirme Projesi</span>
      </NavLink>
      <div className="optionContainer">
        <NavLink className="options" to={"/events"}>
          <span>Etkinlikler</span>
        </NavLink>

        <NavLink className="options" to={"/contact"}>
          <span>İletişim</span>
        </NavLink>
        {roleId == "Donor" && (
          <NavLink className="options" to={"/donate"}>
            <span>Bilet Bağışı</span>
          </NavLink>
        )}
      </div>

      <div className="iconContainer">
        <NavLink className="span" to={isAuth ? "/profile" : "/sign-in"}>
          <FaRegUser className="icon"></FaRegUser>
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    roleId: state.auth.roleId,
  };
};

export default connect(mapStateToProps, null)(Header);
