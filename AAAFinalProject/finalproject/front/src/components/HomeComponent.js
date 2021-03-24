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

      <div className="top">
        {/* <div className="home-container elem-ToTop" onClick={goToCourses}>
          <p>I</p>
          <p>TO</p>
          <p>ITALIAN MASTERS</p>
        </div> */}

        {/* <div className="home-container elem-ToTop" onClick={goToCourses}>
          <p>T</p>
        </div> */}
      </div>

      <div className="bottom">
        {/*  <div
          className="home-container elem-ToLeft small"
          onClick={goToRegister}
        >
          <p>Sign up</p>
          <p>to receive</p>
          <p>more offers!</p>
        </div> */}
        {/* <div
          className="home-container elem-ToRight small"
          onClick={goToTeachers}
        >
          <p>Meet</p>
          <p>our</p>
          <p>teachers!</p>
        </div> */}
      </div>
    </div>
  );
}
