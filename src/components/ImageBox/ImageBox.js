import "./ImageBox.style.css";
import { Link } from "react-router-dom";
const ImageBox = ({ imageUrl }) => {
  return (
    <div className="imageContainer">
      <img src={imageUrl} className="image" alt="image" />
    </div>
  );
};

export default ImageBox;
