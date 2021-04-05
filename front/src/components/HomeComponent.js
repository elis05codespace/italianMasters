import { useHistory } from "react-router-dom";

export default function HomeComponent() {
  let history = useHistory();

  function goToCourses() {
    history.push("/coursesOnlyView");
  }

  function goToRegister() {
    history.push("/register");
  }

  function goToTeachers() {
    history.push("/teachers");
  }

  return (
    <div>
      <div className="block">
        <h1 className="main-slogan mt-5">
          <span>Learn Italian With The Best.</span>
          <span className="mb-4">Because You Know...</span>
          <span className="mt-5">Italians Do It Better!</span>
        </h1>
      </div>
    </div>
  );
}
