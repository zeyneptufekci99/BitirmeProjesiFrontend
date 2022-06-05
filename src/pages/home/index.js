import "./home.style.css";

import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import { getEvents } from "../../slice/event.slice";
import React, { useState } from "react";
import NewsBox from "../../components/NewsBox/NewsBox";
import { useEffect } from "react";
import ImageBox from "../../components/ImageBox/ImageBox";

const Home = ({ getEvents, events }) => {
  useEffect(() => {
    getEvents();
  }, []);

  const [sonaYaklasiyor, setSonaYaklasiyor] = useState();
  const [yeniGelen, setYeniGelen] = useState();
  const [ucretsizBilet, setUcretsizBilet] = useState();
  const [kontenjanBitiyor, setKontenjanBitiyor] = useState();

  const currentMonth = new Date().getMonth() + 1;
  useEffect(() => {
    if (events.length > 0) {
      const sonaYaklasiyorProps = events.map((event, index) => {
        const eventEndDate = parseInt(event.endDate.toString().split("-")[1]);
        if (currentMonth == eventEndDate) {
          return {
            id: event.id,
            name: event.name,
          };
        }
      });
      if (sonaYaklasiyorProps) {
        setSonaYaklasiyor(sonaYaklasiyorProps);
      }

      const yeniGelenProps = events.map((event, index) => {
        const eventStart = parseInt(event.startDate.toString().split("-")[1]);
        if (currentMonth == eventStart) {
          return {
            id: event.id,
            name: event.name,
          };
        }
      });

      if (yeniGelenProps) {
        setYeniGelen(yeniGelenProps);
      }

      const ucretsizBiletProps = events.map((event, index) => {
        if (event.donated > 0) {
          return {
            id: event.id,
            name: event.name,
          };
        }
      });
      if (ucretsizBiletProps) {
        setUcretsizBilet(ucretsizBiletProps);
      }

      const kontenjanBitiyorProps = events.map((event, index) => {
        if (event.quota < 10) {
          return {
            id: event.id,
            name: event.name,
          };
        }
      });
      if (kontenjanBitiyorProps) {
        setKontenjanBitiyor(kontenjanBitiyorProps);
      }
    }
  }, [events]);

  return (
    <Layout>
      {events.length > 0 && (
        <div className="boxContainer">
          <NewsBox label="Sona Yaklaşıyor" links={sonaYaklasiyor}></NewsBox>

          <NewsBox label="Bu Ay Gelen" links={yeniGelen}></NewsBox>

          <NewsBox label="Ücretsiz Bilet Var" links={ucretsizBilet}></NewsBox>

          <NewsBox
            label="Ücretsiz Bilet Var"
            links={kontenjanBitiyor}
          ></NewsBox>
        </div>
      )}
      <ImageBox imageUrl="image"></ImageBox>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { events: state.events };
};
export default connect(mapStateToProps, { getEvents })(Home);
