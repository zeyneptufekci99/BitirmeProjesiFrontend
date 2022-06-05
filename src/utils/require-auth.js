import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import React from "react";

const RequireAuth = ({ children, isAuth, roleId, roles }) => {
  const checkRole = roles.indexOf(roleId);

  if (!isAuth || checkRole === -1) {
    return <Navigate to={"/sign-in"}></Navigate>;
  }

  return children;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    roleId: state.auth.roleId,
  };
};

export default connect(mapStateToProps, null)(RequireAuth);
