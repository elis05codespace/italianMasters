import { useHistory } from "react-router-dom";
import { useState } from "react";
import { UrlServer } from "../context/UrlServer";

export default function ContactForm() {
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch(UrlServer + "query/", {
      method: "POST",
      mode: "cors",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("respuesta ok", data);
        alert("Message successfully sent!");
      })
      .catch((error) => console.log(error));
    history.push("/home");
  };

  const handleName = (evento) => {
    setName(evento.target.value);
  };

  const handleEmail = (evento) => {
    setEmail(evento.target.value);
  };
  const handleMessage = (evento) => {
    setMessage(evento.target.value);
  };

  return (
    <div className="container">
      <form
        class="mb-3 container contact-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="mb-5">Get in touch!</h2>

        <div className="mb-3 form-group">
          <label htmlFor="nameFormControlInput1" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameFormControlInput1"
            placeholder="Enter your name"
            required
            onChange={handleName}
          />
        </div>

        <div className="mb-3 form-group">
          <label htmlFor="emailFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailFormControlInput1"
            placeholder="Enter your email address"
            required
            onChange={handleEmail}
          />
        </div>
        <div className="mb-5 form-group">
          <label htmlFor="exampleFormControlTextarea1" class="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Enter your message"
            required
            onChange={handleMessage}
          ></textarea>
        </div>

        <div className="submit-container">
          <button type="submit">Submit</button>
          <button onClick={(e) => history.push("/home")}>x</button>
        </div>
      </form>
    </div>
  );
}
