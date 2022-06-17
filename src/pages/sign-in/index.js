import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import SignInForm from "../../forms/SignIn/SignInForm";
import { connect } from "react-redux";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { login } from "../../slice/auth.slice";
const SignIn = ({ login }) => {
  const cookies = new Cookies();
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();

  useEffect(() => {
    if (loginValues.username != "") {
      login({
        username: loginValues.username,
        password: loginValues.password,
      }).then(() => {
        cookies.set("isClosed", "open");
        navigate("/");
      });
    }
  }, [loginValues]);

  return (
    <>
      <Layout>
        <SignInForm getValues={(values) => setLoginValues(values)}></SignInForm>
      </Layout>
    </>
  );
};

export default connect(null, { login })(SignIn);
