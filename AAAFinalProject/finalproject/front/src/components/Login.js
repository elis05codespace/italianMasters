import { NavLink } from "react-router-dom";
import jwt_decode from "jwt-decode";
import userEvent from "@testing-library/user-event";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/Context";
import { useContext } from "react";
import { UrlServer } from "../context/UrlServer";

export default function Login() {
  const { user, setUser } = useContext(GlobalContext);
  let history = useHistory();
  let username;
  let password;

  function usernamef(e) {
    username = e.target.value;
    console.log("En la función usernamef: ", username);
  }

  function passwordf(e) {
    password = e.target.value;
  }

  function handleLogin(e) {
    e.preventDefault();
    console.log("Username: ", username);
    let credentials = {
      username: username,
      password: password,
    };

    fetch(UrlServer + "login", {
      method: "POST",
      cors: "CORS",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("respuesta ok", data);
        localStorage.setItem("token", data.token);

        let decoded = jwt_decode(data.token);
        console.log(decoded);
        localStorage.setItem("user", decoded.username);
        setUser(decoded.username);
      });
    history.push("/home");
  }

  return (
    <div className="container login-container">
      <form
        className="mb-3 container contact-form login-form"
        onSubmit={(e) => handleLogin(e)}
      >
        <h2 className="mb-3">Sign in</h2>
        <div className="link-register mb-3">
          new user? please
          <NavLink
            activeClassName="active"
            className="links text-decoration-none ml-3 special-register"
            exact
            to="/register"
          >
            <p className="white">Sign up</p>
          </NavLink>{" "}
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="emailLogin" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailLogin"
            name="emailLogin"
            placeholder="Enter your email address"
            required
            onChange={(e) => usernamef(e)}
          />
        </div>

        <div className="mb-5 form-group">
          <label htmlFor="passwordLogin" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordLogin"
            name="passwordLogin"
            placeholder="Enter your password"
            required
            onChange={(e) => passwordf(e)}
          />
        </div>

        <div className="submit-container">
          <button type="submit">Submit</button>
          <button className="closing" onClick={(e) => history.push("/home")}>
            x
          </button>
        </div>
      </form>
    </div>
  );
}
