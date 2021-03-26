import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { useHistory } from "react-router-dom";

export default function Footer() {
  let history = useHistory();

  function goHome() {
    history.push("/home");
  }

  return (
    <div className="wrapper">
      <footer className="mt-5">
        <h2 className="text-center p-3 footer-title" onClick={goHome}>
          <HiOutlineAcademicCap size={38} className="logo2" />
          Italian Masters
        </h2>
        <div className="icons-container">
          <a href="#">
            <FaFacebook className="fa-2x" />
          </a>
          <a href="#">
            <FaInstagram className="fa-2x" />
          </a>
          <a href="#">
            <FaTwitter className="fa-2x" />
          </a>
        </div>
        <div className="text-center mb-4">© 2021 Copyright Italian Masters</div>
      </footer>
    </div>
  );
}
