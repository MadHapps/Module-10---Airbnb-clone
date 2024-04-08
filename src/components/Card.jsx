import "./card.css";
// import coverImg from '../images/katie-zaferes.png'

export default function Card(props) {
  const { coverImg, stats, location, title, price } = props;

  return (
    <div className="card">
      <img src={`../images/${coverImg}`} alt="" />
      <p className="card--rating">
        <i className="fa-sharp fa-solid fa-star"></i>
        {stats.rating}
        <span className="rating_count">({stats.reviewCount})</span>
        <span className="rating_country">{location}</span>
      </p>
      <p className="card--title">{title}</p>
      <p className="card--price">
        From $<span id="card--price">{price}</span>
        <span>/ person</span>
      </p>
    </div>
  );
}
