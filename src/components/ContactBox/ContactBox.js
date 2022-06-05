import "./ContactBox.style.css";
const ContactBox = (props) => {
  return (
    <div className="box">
      <div className="text">{"İsim: " + props.name}</div>
      <div className="text"> {"Telefon Numarası: " + props.no}</div>
      <div className="text"> {"Email: " + props.mail}</div>
      <div className="text">{"Okul Numarası: " + props.schoolNo}</div>
    </div>
  );
};

export default ContactBox;
