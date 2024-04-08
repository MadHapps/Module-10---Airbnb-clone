import "./card.css";
// import image from '../images/katie-zaferes.png'

export default function Card(props) {
  const { image, rating, ratingCount, country, description, price } = props;

  return (
    <section className="card-section">
      <div className="card">
        <img src={image} alt="" />
        <p className="card--rating">
          <i className="fa-sharp fa-solid fa-star"></i>
          {rating}
          <span className="rating_count">({ratingCount})</span>
          <span className="rating_country">{country}</span>
        </p>
        <p className="card--description">{description}</p>
        <p className="card--price">
          From $<span id="card--price">{price}</span>
          <span>/ person</span>
        </p>
      </div>
    </section>
  );
}
