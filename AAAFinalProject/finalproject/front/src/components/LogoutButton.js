import { HiUserCircle } from "react-icons/hi";
import { useHistory } from "react-router-dom";

export default function LogoutButton() {
  let history = useHistory();
  const handleLogout = (evento) => {
    localStorage.removeItem("token");
    history.push("/home");
  };

  return (
    <div>
      <button className="logout" onClick={handleLogout}>
        <HiUserCircle size={20} />
        Log out
      </button>
    </div>
  );
}
