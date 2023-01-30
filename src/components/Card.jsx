import "../styles/Card.css";
import staricon from "../assets/star.png";

const Card = (props) => {
  let labelText;
  if (props.openSpots === 0) {
    labelText = "sold out";
  } else if (props.openSpots > 0 && props.location == "Online") {
    labelText = props.location;
  }

  return (
    <div className="card--container">
      <div className="card--image_wrapper">
        {labelText && <span className="card--image_label">{labelText}</span>}
        <img
          src={`../src/images/${props.coverImg}`}
          alt=""
          className="card--image"
        />
      </div>
      <div className="card--details">
        <p className="card--rating">
          <img src={staricon} alt="star rating" className="card--star_icon" />
          <span className="card--rating_num">
            {parseFloat(props.stats.rating).toFixed(1)}&nbsp;
          </span>
          <span className="card--rating_count">
            ({props.stats.reviewCount}) &bull;
          </span>
          <span className="card--rating_country">&nbsp;{props.location}</span>
        </p>
        <p className="card--title">{props.title}</p>
        <p className="card--pricing">
          <strong>From ${props.price}</strong> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
