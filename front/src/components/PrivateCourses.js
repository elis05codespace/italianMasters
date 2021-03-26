import { GlobalContext } from "../context/Context";
import { useContext } from "react";
import { UrlServer } from "../context/UrlServer";
import MyProducts from "./MyProducts";
import { useEffect } from "react";

export default function PrivateCourses() {
  const { myCourses, setMyCourses } = useContext(GlobalContext);
  let token = localStorage.getItem("token");

  useEffect(() => {
    fetch(UrlServer + "user/products", {
      method: "GET",
      cors: "CORS",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setMyCourses(data));
  }, []);

  let text = "";
  let myCoursess = "";
  let numCourses = myCourses.length;
  if (myCourses) {
    myCoursess = myCourses.map((course, i) => {
      return (
        <div key={i}>
          <MyProducts course={course} />
        </div>
      );
    });
  } else {
    text = "No courses available.";
  }
  return (
    <div className="myCourses container">
      <h2 id="myCourses" className="mb-1">
        Courses Purchased:{" "}
      </h2>
      <h2 className="mt-1 mb-5">{numCourses}</h2>
      {myCoursess}
      <p>{text}</p>
    </div>
  );
}
