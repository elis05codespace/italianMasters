import reviewsData from "../data/reviews.json";
import SlideReviewDiv from "./SlideReviewDiv";
import { Slide } from "react-slideshow-image";
import img1 from "../imagesSlide/big1.jpg";
import img4 from "../imagesSlide/big4.jpg";
import img5 from "../imagesSlide/big5.jpg";
import img6 from "../imagesSlide/big7.jpg";
import img8 from "../imagesSlide/big8.jpg";
import img9 from "../imagesSlide/big9.jpg";
import img10 from "../imagesSlide/big10.jpg";

const props = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Copyslide = () => {
  let reviews = reviewsData.map((review, i) => {
    return (
      <div key={i}>
        <SlideReviewDiv review={review} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="containerSlide">
        <Slide {...props}>
          <div className="each-slide">
            <div className="relative-container">
              <img src={img1} alt="img1" />
              <div className="centered-text">
                <h3 className="titleReview">What Our Students Say About Us</h3>
                <p>
                  Excellent School! I just did a 6 weeks of the online intensive
                  language course and I could not recommend it enough! I went
                  from speaking very little Italian to being able to read,
                  write, listen and speak with ease. Both teachers that I had
                  were very understanding and encouraging and I loved being in a
                  class of students from all around the world (whilst also
                  studying from the comfort of my own home!). If you want to
                  learn Italian where you leave each lesson smiling, you should
                  definitely sign up with this school!
                </p>
                <p>Mary Jane Rogers</p>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="relative-container">
              <img src={img8} alt="img8" />
              <div className="centered-text">
                <h3 className="titleReview">What Our Students Say About Us</h3>
                <p>
                  Great classes, very nice teachers, a lot of flexibility and
                  effective learning methods. Miss you guys!!
                </p>
                <p>Peter Pfister</p>
              </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="relative-container">
              <img src={img9} alt="img9" />
              <div className="centered-text">
                <h3 className="titleReview">What Our Students Say About Us</h3>
                <p>
                  I took the online intensive course for four months during the
                  lockdown period and I just couldn’t get enough of it. I made
                  my progress from Intermediate to Superior. Classes were always
                  challenging but not to the point of frustrating. Teachers were
                  always friendly but they wouldn’t let you off the hook (of the
                  homework) that easily either. Classmates came and went but
                  classrooms were always conducive to learning and lots of fun.
                  All course material was handed out electronically and zoom
                  conference call was always top notch.
                </p>
                <p>Eva Neef</p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Copyslide;
