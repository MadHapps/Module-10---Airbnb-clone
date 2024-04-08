import "./hero.css";
import heroImage from "../images/photo-grid.png";

export default function Hero() {
  return (
    <header>
      <img
        src={heroImage}
        alt="various images of different activities"
        className="hero--img"
      />
      <div className="hero--text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </header>
  );
}
