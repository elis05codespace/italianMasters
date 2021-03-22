import { UrlServer } from "../context/UrlServer";

export default function CardTeacher({ teacher }) {
  return (
    <div className="container mb-5">
      <div className="card mt-3 teacher-card">
        <img
          src={`${UrlServer}${teacher.image}`}
          alt="tutors profile picture"
          className="card-img-top foto-teacher"
        />
        <div className="card-body">
          <p className="card-text teacher-description">
            <p className="teacher-name">{teacher.name}</p>
            <p className="teacher-description">{teacher.description}</p>
          </p>
        </div>
      </div>
    </div>
  );
}
