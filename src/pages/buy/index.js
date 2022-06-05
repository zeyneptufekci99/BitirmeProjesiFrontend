import Layout from "../../components/Layout/Layout";
import React from "react";
import QRCode from "react-qr-code";
import "./index.style.css";
import { useLocation } from "react-router-dom";

const Buy = () => {
  const { state } = useLocation();

  return (
    <Layout>
      <div className="buyBase">
        <span className="pageTitle">QR kodunu yetkili personel gösteriniz</span>
        <QRCode value={state.eventId.toString()} />
      </div>
    </Layout>
  );
};

export default Buy;
