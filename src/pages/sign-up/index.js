import Layout from "../../components/Layout/Layout";
import React, { useEffect, useState } from "react";
import SignUpForm from "../../forms/SignUp/SignUpForm";

import { connect } from "react-redux";
import { createUser } from "../../slice/user.slice";
import { useNavigate } from "react-router-dom";
const SignUp = (props) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    surnaname: "",
    username: "",
    email: "",
    password: "",
    roleId: 1,
  });

  useEffect(() => {
    if (user.name !== "") {
      props.createUser(user).then((response) => {
        navigate("/");
      });
    }
  }, [user]);

  return (
    <Layout>
      <SignUpForm isSignedUp={(values) => setUser(values)}> </SignUpForm>
    </Layout>
  );
};

export default connect(null, { createUser })(SignUp);
