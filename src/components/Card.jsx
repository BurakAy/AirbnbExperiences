import "../styles/Card.css";
import katieimage from "../assets/katie_z.png";
import staricon from "../assets/star.png";

const Card = () => {
  return (
    <div className="card--container">
      <div className="card--image_wrapper">
        <span className="card--image_label">Sold Out</span>
        <img src={katieimage} alt="Katie Zaferes" className="card--image" />
      </div>
      <div className="card--details">
        <p className="card--rating">
          <img src={staricon} alt="star rating" className="card--star_icon" />
          <span className="card--rating_text">5.0&nbsp;</span>
          <span className="card--rating_count">(6) &bull;</span>
          <span className="card--rating_country">&nbsp;USA</span>
        </p>
        <p className="card--title">Life lessons with Katie Zaferes</p>
        <p className="card--pricing">
          <strong>From $136</strong> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
