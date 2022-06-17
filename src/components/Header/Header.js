import "./Header.style.css";
import { FaRegUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { FiLogOut } from "react-icons/fi";

import { logout } from "../../slice/auth.slice";
const Header = ({ isAuth, roleId, logout }) => {
  let navigate = useNavigate();
  return (
    <div className="headerBase">
      <NavLink className="span" to={"/"}>
        <img
          className="logo"
          src="https://findicons.com/files/icons/2770/ios_7_icons/512/student.png"
        ></img>
        <span>SosyalÖğrenci</span>
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
        <NavLink to={isAuth ? "/profile" : "/sign-in"}>
          <FaRegUser className="icon"></FaRegUser>
        </NavLink>
        {isAuth && (
          <FiLogOut
            onClick={() =>
              logout().then(() => {
                navigate("/");
              })
            }
            className="logoutIcon"
          ></FiLogOut>
        )}
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

export default connect(mapStateToProps, { logout })(Header);
