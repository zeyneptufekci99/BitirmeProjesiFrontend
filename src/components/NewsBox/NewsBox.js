import "./NewsBox.style.css";
import { Link } from "react-router-dom";
const NewsBox = ({ links = [], label }) => {
  return (
    <div className="boxBase">
      <div className="boxTitle">{label}</div>

      {links &&
        links.map((link, index) => {
          return (
            <div key={index}>
              {link && (
                <Link className="linkText" to={`/events/${link.id}`}>
                  <span className="linkName">{link.name}</span>
                </Link>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default NewsBox;
