import "./PopUpPointInfo.style.css";
import { GiPartyPopper } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateUser, getUserById } from "../../slice/user.slice";
import Cookies from "universal-cookie";

const PopUpPointInfo = ({
  count033,
  count05,
  count1,
  count15,
  getUserById,
  updateUser,
  userId,
}) => {
  const cookies = new Cookies();
  const count =
    (count033 ?? 0) * 0.2 +
    (count05 ?? 0) * 0.4 +
    (count1 ?? 0) * 0.8 +
    (count15 ?? 0) * 1.2;

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
      setUser(res.payload);
    });
  }, []);

  useEffect(() => {
    if (cookies.get("isClosed") == "open" && user.name != "") {
      const modifiedValue = {
        ...user,
        id: userId,
        point: user.point + count,
      };
      updateUser(modifiedValue).then((response) => {});
    }
  }, [cookies.get("isClosed"), user]);

  return (
    <div className="PopUpBase" id="modal">
      <div className="PopUpContainer">
        <div className="popUpHeader">
          <span className="popUpTitle">
            {`Tebrikler ${user.name}!`}{" "}
            <GiPartyPopper className="icon"></GiPartyPopper>
          </span>
          <AiOutlineCloseCircle
            onClick={() => {
              cookies.set("isClosed", "close");
              document.getElementById("modal").style.display = "none";
            }}
            className="icon"
          ></AiOutlineCloseCircle>
        </div>

        <div className="popUpContainer">
          <span className="popUpText">Topladığınız</span>
          {count033 && count033 != 0 && (
            <span className="popUpText">
              {`${count033} adet 0.33 litre şişe,`}
            </span>
          )}
          {count05 && count05 != 0 && (
            <span className="popUpText">
              {`${count05} adet 0.5 litre şişe,`}
            </span>
          )}
          {count1 && count1 != 0 && (
            <span className="popUpText">{`${count1} adet 1 litre şişe,`}</span>
          )}
          {count15 && count15 != 0 && (
            <span className="popUpText">
              {`${count15} adet 1.5 litre şişe,`}
            </span>
          )}
          <span className="popUpText">{`sayesinde ${count} puan kazandınız!`}</span>
          <span className="popUpInfoText">
            * 0.33 litrelik şişe 0.2, 0.5 litrelik şişe 0.4, 1 litrelik şişe 0.8
            ve 1.5 litrelik şişe 1.2 puandır
          </span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { userId: state.auth.userId };
};
export default connect(mapStateToProps, { getUserById, updateUser })(
  PopUpPointInfo
);
