// import reviewsData from "../data/reviews.json";
import SlideReviewDiv from "./SlideReviewDiv";
import { Slide } from "react-slideshow-image";
import { GlobalContext } from "../context/Context";
import { useContext } from "react";

const props = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true,
};

const Slideshow = () => {
  const { reviews, setReviews } = useContext(GlobalContext);

  let reviewss = reviews.map((review, i) => {
    return (
      <div key={i}>
        <SlideReviewDiv review={review} />
      </div>
    );
  });
  return (
    // <div className="container">
    <div className="containerSlide">
      <Slide {...props}>{reviewss}</Slide>
    </div>
    // </div>
  );
};

export default Slideshow;
