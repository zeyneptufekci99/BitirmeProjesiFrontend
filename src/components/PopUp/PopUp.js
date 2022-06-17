import "./PopUp.style.css";
import { GiPartyPopper } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
const PopUp = (props) => {
  const count =
    props.count033 * 0.2 +
    props.count05 * 0.4 +
    props.count1 * 0.8 +
    props.count15 * 1.2;
  return (
    <div className="PopUpBase" id="modal">
      <div className="PopUpContainer">
        <div className="popUpHeader">
          <span className="popUpTitle">
            {`Tebrikler ${props.name}!`}{" "}
            <GiPartyPopper className="icon"></GiPartyPopper>
          </span>
          <AiOutlineCloseCircle
            onClick={() =>
              (document.getElementById("modal").style.display = "none")
            }
            className="icon"
          ></AiOutlineCloseCircle>
        </div>

        <div className="popUpContainer">
          <span className="popUpText">Topladığınız</span>
          {props.count033 && (
            <span className="popUpText">
              {`${props.count033} adet 0.33 litre şişe,`}
            </span>
          )}
          {props.count05 && (
            <span className="popUpText">
              {`${props.count05} adet 0.5 litre şişe,`}
            </span>
          )}
          {props.count1 && (
            <span className="popUpText">{`${props.count1} adet 1 litre şişe,`}</span>
          )}
          {props.count15 && (
            <span className="popUpText">
              {`${props.count15} adet 1.5 litre şişe,`}
            </span>
          )}
          <span className="popUpText">{`sayesinde ${count} puan kazandınız!`}</span>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
