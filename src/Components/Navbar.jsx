import "../styles/navbar.css";
import pursuitLogo from "../assets/pursuitlogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={pursuitLogo} alt="Pursuit Logo" />
        <h1 className="nav-title">Pursuit 2026</h1>
      </div>

      <ul className="nav-links">
        <li>Accommodation</li>
        <li>Events</li>
        <li>Workshops</li>
        <li>Contact Us</li>
      </ul>

      <div className="nav-actions">
        <button className="neo-btn">SIGN IN</button>
        <button className="neo-btn">SIGN UP</button>
      </div>
    </nav>
  );
};

export default Navbar;
