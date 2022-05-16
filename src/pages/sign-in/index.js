import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import SignInForm from "../../forms/SignIn/SignInForm";
import { connect } from "react-redux";
import { getUsers } from "../../slice/user.slice";
import { useNavigate } from "react-router-dom";
const SignIn = ({
  getUsers,
  users,
  setIsSignedIn = () => {},
  getUserId = (id) => {},
}) => {
  let navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Layout>
        <SignInForm
          userList={users}
          setIsSignedIn={() => {
            setIsSignedIn();
            navigate("/");
          }}
          getUserId={(id) => getUserId(id)}
        ></SignInForm>
      </Layout>
    </>
  );
};
const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { getUsers })(SignIn);
