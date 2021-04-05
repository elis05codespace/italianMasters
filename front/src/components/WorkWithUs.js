import { useHistory } from "react-router-dom";
import { useState } from "react";
import { UrlServer } from "../context/UrlServer";

export default function WorkWithUs() {
  let history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [more, setMore] = useState("");
  const [curriculum, setCurriculum] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("more", more);
    formData.append("curriculum", curriculum);

    fetch(UrlServer + "candidate/", {
      method: "POST",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("respuesta ok", data);
        alert("Data successfully sent!");
      })
      .catch((error) => {
        alert("Something went wrong, please try again");
        history.push("/workwithus");
      });
    history.push("/home");
  };

  const handleFirstName = (evento) => {
    setFirstName(evento.target.value);
  };
  const handleLastName = (evento) => {
    setLastName(evento.target.value);
  };
  const handleEmail = (evento) => {
    setEmail(evento.target.value);
  };
  const handleMore = (evento) => {
    setMore(evento.target.value);
  };
  const handleFile = (evento) => {
    setCurriculum(evento.target.files[0]);
  };

  return (
    <div className="container">
      <form
        class="mb-3 container contact-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="mb-5">Work With Us!</h2>

        <div className="mb-3 form-group">
          <label htmlFor="firstNameJobApplication" className="form-label">
            * First Name
          </label>
          <input
            type="text"
            className="form-control"
            name="firstNameJobApplication"
            id="firstNameJobApplication"
            placeholder="Enter your name"
            required
            onChange={handleFirstName}
          />
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="lastNameJobApplication" className="form-label">
            * Last Name
          </label>
          <input
            type="text"
            className="form-control"
            name="lastNameJobApplication"
            id="lastNameJobApplication"
            placeholder="Enter your surname"
            required
            onChange={handleLastName}
          />
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="emailJobApplication" className="form-label">
            * Email
          </label>
          <input
            type="email"
            className="form-control"
            name="emailJobApplication"
            id="emailJobApplication"
            placeholder="Enter your email address"
            required
            onChange={handleEmail}
          />
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="addCVJobApplication" className="form-label">
            * Add your CV
          </label>
          <input
            type="file"
            className="form-control"
            accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            name="addCVJobApplication"
            id="addCVJobApplication"
            placeholder="Select file"
            required
            onChange={handleFile}
          />
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="extraInfoJobApplication" class="form-label">
            Additional information
          </label>
          <textarea
            className="form-control"
            name="extraInfoJobApplication"
            id="extraInfoJobApplication"
            rows="4"
            placeholder="Enter other important information "
            onChange={handleMore}
          ></textarea>
        </div>
        <div className="mb-2">
          By submitting you agree to our{" "}
          <a href="#" className="terms-link">
            Terms and Conditions{" "}
          </a>{" "}
          policy
        </div>
        <div className="submit-container">
          <button type="submit">Submit</button>
          <button onClick={(e) => history.push("/home")}>x</button>
        </div>
      </form>
    </div>
  );
}
