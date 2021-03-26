import CardTeacher from "./CardTeacher";
// import teachersData from "../data/teachers.json";
import { GlobalContext } from "../context/Context";
import { useContext } from "react";

export default function Teachers() {
  const { teachers, setTeachers } = useContext(GlobalContext);

  let teacherss = teachers.map((teacher, i) => {
    return (
      <div key={i}>
        <CardTeacher teacher={teacher} />{" "}
      </div>
    );
  });
  return (
    <div className="container teachers-container">
      <div className="our-teachers">
        <h1>Our Teachers</h1>
        <h3 className="mb-5">Talented Italian Tutors</h3>
        <p>
          Below you can see all the tutors who are currently accepting new
          students.
        </p>
        <p>
          They have an average rating of 4.9 stars out of 5 on an independent
          review site.
        </p>
        <p>They’re all native Italian speakers who can also speak English.</p>

        <p>They’ll make you feel comfortable, even if you’re a beginner.</p>
      </div>
      <div className="container teacher-cards-container">{teacherss}</div>
    </div>
  );
}
