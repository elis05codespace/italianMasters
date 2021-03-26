import jwt_decode from "jwt-decode";
import userEvent from "@testing-library/user-event";
import { useHistory } from "react-router-dom";
import { UrlServer } from "../context/UrlServer";

export default function Register() {
  let history = useHistory();
  let username;
  let password;
  let firstName;
  let lastName;

  function usernamef(e) {
    username = e.target.value;
    console.log("En la función usernamef: ", username);
  }

  function passwordf(e) {
    password = e.target.value;
  }

  function firstNamef(e) {
    firstName = e.target.value;
    console.log("En la función usernamef: ", firstName);
  }

  function lastNamef(e) {
    lastName = e.target.value;
    console.log("En la función usernamef: ", lastName);
  }

  function handleRegister(e) {
    e.preventDefault();
    console.log("Username: ", username);
    let credentials = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    fetch(UrlServer + "user/new", {
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
      });
    history.push("/login");
  }

  return (
    <form
      class="mb-3 container contact-form"
      onSubmit={(e) => handleRegister(e)}
    >
      <h2>Registration Form</h2>

      <div className="mb-3 mt-5 form-group">
        <label htmlFor="firstNameregister" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          name="firstNameregister"
          id="firstNameregister"
          placeholder="Enter your first name"
          required
          onChange={(e) => firstNamef(e)}
        />
      </div>
      <div className="mb-3 form-group">
        <label htmlFor="lastNameRegister" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          name="lastNameRegister"
          id="lastNameRegister"
          placeholder="Enter your last name"
          required
          onChange={(e) => lastNamef(e)}
        />
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="emailRegister" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="emailRegister"
          id="emailRegister"
          placeholder="Enter your email address"
          required
          onChange={(e) => usernamef(e)}
        />
      </div>

      <div className="mb-3 form-group">
        <label htmlFor="passwordRegister" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="passwordRegister"
          id="passwordRegister"
          placeholder="Enter your password"
          required
          onChange={(e) => passwordf(e)}
        />
      </div>

      <div className="mb-4 form-group">
        <label htmlFor="confirmPassword" className="form-label">
          Repeat Password
        </label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Enter your password again"
        />
      </div>
      <div className="mb-4">
        By submitting you agree to our{" "}
        <a href="#" className="terms-link">
          Terms and Conditions{" "}
        </a>{" "}
        policy
      </div>
      <div className="submit-container">
        <button type="submit">Submit</button>
        <button onClick={(e) => history.push("/home")}>X</button>
      </div>
    </form>
  );
}
