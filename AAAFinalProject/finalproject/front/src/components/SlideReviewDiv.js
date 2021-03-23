import { UrlServer } from "../context/UrlServer";

export default function SlideReviewDiv({ review }) {
  return (
    <div className="each-slide">
      <div className="relative-container">
        <img src={`${UrlServer}${review.image}`} alt="Italian landscape" />
        <div className="centered-text">
          <h4 className="titleReview mb-4">What Our Students Say About Us</h4>
          <p>{review.review}</p>
          <p className="mb-1 mt-5">{review.name}</p>
          <p>{review.country}</p>
        </div>
      </div>
    </div>
  );
}
