import Layout from "../../components/Layout/Layout";
import React, { useState, useEffect } from "react";

import "./index.style.css";
import ProfileForm from "../../forms/Profile/Profile";
import { getUserById, updateUser } from "../../slice/user.slice";
import { connect } from "react-redux";

const Profile = ({ userId, getUserById, updateUser }) => {
  const [userProps, setUserProps] = useState();
  const [user, setUser] = useState({
    name: "",
    surnaname: "",
    username: "",
    email: "",
    password: "",
    roleId: 1,
    point: 0,
  });
  useEffect(() => {
    getUserById({ id: userId }).then((res) => {
      setUserProps(res.payload);
    });
  }, []);

  useEffect(() => {
    if (user.name !== "") {
      const modifiedValue = { ...user };
      updateUser(modifiedValue).then((response) => {});
    }
  }, [user]);
  return (
    <Layout>
      <div className="profileBase">
        {userProps != undefined && (
          <ProfileForm
            values={(values) => setUser(values)}
            user={userProps}
          ></ProfileForm>
        )}
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};
export default connect(mapStateToProps, { getUserById, updateUser })(Profile);
