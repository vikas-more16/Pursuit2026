import "../styles/hero.css";
import PursuitName from "../assets/PursuitName.png";
import Blackhole from "../assets/Blackhole.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <p className="hero-subtitle">
          <b>SSGMCE &nbsp;&nbsp;Presents</b>
        </p>
        {/* <img src={Blackhole} alt="Blackhole" className="blackhole-bg" /> */}

        <img src={PursuitName} alt="Pursuit 2026" className="pursuit-name" />
      </div>

      <h2 className="hero-tagline">NATIONAL-LEVEL TECHNICAL SYMPOSIUM</h2>
    </section>
  );
};

export default Hero;
