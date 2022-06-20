import Layout from "../../components/Layout/Layout";
import React from "react";
import QRCode from "react-qr-code";
import "./index.style.css";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { getUserById } from "../../slice/user.slice";
const Buy = ({ getUserById, userId }) => {
  const { state } = useLocation();
  const [value, setValue] = useState();

  useEffect(() => {
    getUserById({ id: userId }).then((res) => {
      setValue({ ...res.payload, eventId: state.eventId });
    });
  }, []);

  return (
    <Layout>
      <div className="buyBase">
        <span className="pageTitle">QR kodunu yetkili personel gösteriniz</span>
        <QRCode value={state.eventId} />
      </div>
    </Layout>
  );
};
const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};
export default connect(mapStateToProps, { getUserById })(Buy);
