import "./hero.css";

export default function Hero() {
  return (
    <header>
      <img
        src="/images/photo-grid.png"
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
