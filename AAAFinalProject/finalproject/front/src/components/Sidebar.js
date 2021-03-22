import { GlobalContext } from "../context/Context";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { FaGraduationCap, FaShoppingCart } from "react-icons/fa";
import { MdNewReleases } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

export default function Sidebar() {
  let history = useHistory();
  const { user, setUser } = useContext(GlobalContext);
  console.log(user);
  const sidebarClass = user ? "show" : "hide";

  const goToBuycourses = () => {
    history.push("/courses");
  };

  const goToMycourses = () => {
    history.push("/mycourses");
  };

  const goToOffers = () => {
    history.push("/myoffers");
  };

  const handleLogout = (evento) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    history.push("/home");
  };

  return (
    <div className={`sidebar ${sidebarClass}`}>
      {/* <div className="usernameDiv">
        <HiUserCircle />
      </div>
      <div className="privateLink">{localStorage.getItem("user")}</div> */}
      <ul className="privateList">
        {/* <li id="noHover">
          <div className="privateIcon">
            <HiUserCircle />
          </div>
          <div className="privateLink">{localStorage.getItem("user")}</div>
        </li> */}
        <li onClick={goToBuycourses}>
          <div className="privateIcon">
            <FaShoppingCart />
          </div>
          <div className="privateLink">Shop</div>
        </li>
        <li onClick={goToMycourses}>
          <div className="privateIcon">
            <FaGraduationCap />
          </div>
          <div className="privateLink">Orders</div>
        </li>
        {/* <li onClick={goToOffers}>
          <div className="privateIcon">
            <MdNewReleases />
          </div>
          <div className="privateLink">Latest offers</div>
        </li> */}
        <li onClick={handleLogout}>
          <div className="privateIcon">
            <IoMdLogOut />
          </div>
          <div className="privateLink">Sign out</div>
        </li>
      </ul>
    </div>
  );
}
