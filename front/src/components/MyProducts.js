export default function MyProducts({ course }) {
  return (
    <div className="myProducts-container mb-5 container">
      <h3 id="myCourseName" className="course-name mt-4 mb-4">
        {course.name}
      </h3>
      <div className="course-details">
        <p>DURATION:{course.duration}</p>
        <p>PRICE: € {Number(course.price).toFixed(2)}</p>
        <p>{course.description}</p>
        <p className="mb-4">{course.more}</p>
      </div>
    </div>
  );
}
