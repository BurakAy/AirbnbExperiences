import "../styles/Hero.css";
import groupimage from "../assets/airbnb_group.png";

const Hero = () => {
  return (
    <section className="hero--container">
      <img
        src={groupimage}
        alt="Airbnb group of images"
        className="hero--image"
      />
      <div className="hero--text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
