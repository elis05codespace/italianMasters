import { GlobalContext } from "../context/Context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FaGraduationCap, FaShoppingCart } from "react-icons/fa";
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

  const handleLogout = (evento) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    history.push("/home");
  };

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <ul className="privateList">
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
