import { GlobalContext } from "../context/Context";
import { useContext } from "react";
import ProductOnlyView from "./ProductOnlyView";

export default function CoursesOnlyView() {
  const { products, setProducts } = useContext(GlobalContext);
  let productss = products.map((product, i) => {
    return (
      <div key={i}>
        <ProductOnlyView product={product} />
      </div>
    );
  });

  return (
    <div className="container courses-container">
      <div className="our-courses container">
        <h1>Our Courses</h1>
        <div className="ourCourses-paragraph">
          <p>
            Find your ideal online Italian course or take some private classes
            with our tutors.
          </p>
          <p>Try our interactive, customised and effective lessons.</p>

          <p>
            Available for all levels from absolute beginner (A1) to proficiency
            level (C2).
          </p>
          <p className="mt-5 mb-2">Requirements:</p>
          <p>
            It’s enough to have a broadband internet connection installed at
            home and a Zoom or a Skype account, as well as a webcam in order for
            the teacher to make the lesson even more effective, just like a
            normal face to face lesson in a classroom.
          </p>
        </div>
        <div className="products-container">{productss}</div>
      </div>
    </div>
  );
}
