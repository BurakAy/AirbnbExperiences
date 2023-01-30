import "../styles/Card.css";

import staricon from "../assets/star.png";

const Card = (props) => {
  let labelText;
  if (props.label === 0) {
    labelText = "sold out";
  } else if (props.label > 0 && props.country == "Online") {
    labelText = props.country;
  }

  return (
    <div className="card--container">
      <div className="card--image_wrapper">
        {labelText && <span className="card--image_label">{labelText}</span>}
        <img
          src={`../src/images/${props.img}`}
          alt=""
          className="card--image"
        />
      </div>
      <div className="card--details">
        <p className="card--rating">
          <img src={staricon} alt="star rating" className="card--star_icon" />
          <span className="card--rating_num">{props.rating}&nbsp;</span>
          <span className="card--rating_count">({props.count}) &bull;</span>
          <span className="card--rating_country">&nbsp;{props.country}</span>
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
