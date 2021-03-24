import { NavLink } from "react-router-dom";
import { HiOutlineAcademicCap } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-background mainNavbar">
      <button
        className="navbar-toggler nav-btn-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <NavLink
        activeClassName="active"
        className="links text-decoration-none mr-5 ml-3"
        exact
        to="/"
      >
        <h2 className="white brand">
          {/* <span className="logo">IM</span> */}

          <span className="italian">
            <HiOutlineAcademicCap size={40} className="logo2" />
            Italian{" "}
          </span>
          <span className="masters">Masters</span>
        </h2>
      </NavLink>

      <NavLink
        activeClassName="active"
        className="links text-decoration-none mr-3 "
        exact
        to="/login"
      >
        <h5 className="white signIn">Sign in / Sign up</h5>
      </NavLink>

      <div className="collapse navbar-collapse white" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mr-3">
            <NavLink
              activeClassName="active"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              className="links text-decoration-none"
              exact
              to="/coursesOnlyView"
            >
              <h5 className="white">Courses</h5>
            </NavLink>
          </li>

          <li className="nav-item mr-3">
            <NavLink
              activeClassName="active"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              className="links text-decoration-none"
              exact
              to="/teachers"
            >
              <h5 className="white">Teachers</h5>
            </NavLink>
          </li>

          <li className="nav-item mr-3">
            <NavLink
              activeClassName="active"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              className="links text-decoration-none"
              exact
              to="/reviews"
            >
              <h5 className="white">Reviews</h5>
            </NavLink>
          </li>

          <li className="nav-item mr-3">
            <NavLink
              activeClassName="active"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              className="links text-decoration-none"
              exact
              to="/contactus"
            >
              <h5 className="white">Contact</h5>
            </NavLink>
          </li>

          <li className="nav-item mr-3">
            <NavLink
              activeClassName="active"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              className="links text-decoration-none"
              exact
              to="/workwithus"
            >
              <h5 className="white">Jobs</h5>
            </NavLink>
          </li>

          <li className="nav-item active mr-3">
            <NavLink
              activeClassName="active"
              data-toggle="collapse"
              data-target=".navbar-collapse"
              className="links text-decoration-none"
              exact
              to="/faq"
            >
              <h5 className="white">FAQ</h5>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
