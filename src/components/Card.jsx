import "../styles/Card.css";
import staricon from "../assets/star.png";

const Card = (props) => {
  let labelText;
  if (props.info.openSpots === 0) {
    labelText = "sold out";
  } else if (props.info.openSpots > 0 && props.info.location == "Online") {
    labelText = props.info.location;
  }

  return (
    <div className="card--container">
      <div className="card--image_wrapper">
        {labelText && <span className="card--image_label">{labelText}</span>}
        <img
          src={`../src/images/${props.info.coverImg}`}
          alt=""
          className="card--image"
        />
      </div>
      <div className="card--details">
        <p className="card--rating">
          <img src={staricon} alt="star rating" className="card--star_icon" />
          <span className="card--rating_num">
            {parseFloat(props.info.stats.rating).toFixed(1)}&nbsp;
          </span>
          <span className="card--rating_count">
            ({props.info.stats.reviewCount}) &bull;
          </span>
          <span className="card--rating_country">
            &nbsp;{props.info.location}
          </span>
        </p>
        <p className="card--title">{props.info.title}</p>
        <p className="card--pricing">
          <strong>From ${props.info.price}</strong> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
