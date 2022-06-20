import "./home.style.css";

import Layout from "../../components/Layout/Layout";
import { connect } from "react-redux";
import { getEvents } from "../../slice/event.slice";
import React, { useState } from "react";
import NewsBox from "../../components/NewsBox/NewsBox";
import { useEffect } from "react";
import ImageBox from "../../components/ImageBox/ImageBox";
import PopUpPointInfo from "../../components/PopUpPointInfo/PopUpPointInfo";
import Cookies from "universal-cookie";

const Home = ({ getEvents, events, name, roleId }) => {
  const cookies = new Cookies();
  const [sonaYaklasiyor, setSonaYaklasiyor] = useState();
  const [yeniGelen, setYeniGelen] = useState();
  const [ucretsizBilet, setUcretsizBilet] = useState();
  const [kontenjanBitiyor, setKontenjanBitiyor] = useState();
  const [isPopUpClosed, setisPopUpClosed] = useState(cookies.get("isClosed"));

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    setisPopUpClosed(cookies.get("isClosed"));
  }, [cookies.get("isClosed")]);

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

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      {roleId == "User" && isPopUpClosed == "open" && (
        <PopUpPointInfo
          count033={randomNumberInRange(0, 10) ?? 0}
          count05={randomNumberInRange(0, 10) ?? 0}
          count1={randomNumberInRange(0, 10) ?? 0}
          count15={randomNumberInRange(0, 10) ?? 0}
        ></PopUpPointInfo>
      )}

      <Layout>
        {events.length > 0 && (
          <div className="boxContainer">
            <NewsBox label="Sona Yaklaşıyor" links={sonaYaklasiyor}></NewsBox>

            <NewsBox label="Bu Ay Gelen" links={yeniGelen}></NewsBox>

            <NewsBox label="Ücretsiz Bilet Var" links={ucretsizBilet}></NewsBox>

            <NewsBox
              label="Kontenjan Bitiyor"
              links={kontenjanBitiyor}
            ></NewsBox>
          </div>
        )}
        <div className="textBase">
          <div className="textContainer">
            <h1>NEDEN SosyalÖğrenci ?</h1>
            <span>SosyalÖğrenci gençlerin buluşma noktası! </span>
            <span>
              Yapılan sosyal sorumluluk projeleriyle puan kazanabilirsin!{" "}
            </span>
            <span>Bu puanlarla alacağın biletleri indirimli alabilirsin! </span>
            <span>Gittiğin etkinliklere yorum yapmayı unutma!</span>
            <span>Ayrıcaa ücretsiz biletleri de kontrol etmeyi unutma!</span>
          </div>
        </div>
        <div className="imgContainer">
          <ImageBox imageUrl="https://bilgihanem.com/wp-content/uploads/2015/03/bale-hakkinda-bilgiler.jpeg"></ImageBox>
          <ImageBox imageUrl="https://media-cdn.t24.com.tr/media/library/2020/07/1595338549435-tiyatro-2-bant-kibarlik.jpg"></ImageBox>
          <ImageBox imageUrl="https://im.haberturk.com/2020/09/11/ver1599854466/2801064_810x458.jpg"></ImageBox>
          <ImageBox imageUrl="https://blog.n11.com/wp-content/uploads/2017/11/vizyondaki-filmler-800x595.jpg"></ImageBox>
        </div>
      </Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.events,
    name: state.auth.name,
    roleId: state.auth.roleId,
  };
};
export default connect(mapStateToProps, { getEvents })(Home);
