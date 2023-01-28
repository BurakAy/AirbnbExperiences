import "../styles/Navbar.css";
import airbnblogo from "../assets/airbnb.png";

const Navbar = () => {
  return (
    <nav className="navbar--container">
      <img src={airbnblogo} alt="airbnb-logo" className="navbar--logo" />
    </nav>
  );
};

export default Navbar;
