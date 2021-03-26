import { useRef, useEffect, useState, useContext } from "react";
import { UrlServer } from "../context/UrlServer";
import { GlobalContext } from "../context/Context";
import { useHistory } from "react-router-dom";

export default function Paypal({ course }) {
  console.log("course: ", course);
  const paypal = useRef();
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  //const { myPurchase, setMyPurchase } = useContext(GlobalContext);

  let history = useHistory();

  const goToMycourses = () => {
    history.push("/mycourses");
  };

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: course.desc,
                amount: {
                  currency_code: "EUR",
                  value: course.value,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: (err) => {
          setError(err);
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  if (paidFor) {
    console.log(course);
    let id = course.id;
    let token = localStorage.getItem("token");

    fetch(UrlServer + "product/" + id + "/add/user", {
      method: "PUT",
      cors: "CORS",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("respuesta ok", data);
      });

    // aqui la peticion a symfony para que guarde los datos en la ddbb y luego en Mycursos hacer peticion get para que te devuelva los datos de los cursos comprados
    return (
      <div className="successDiv">
        <h1 id="paymentSuccessful" onClick={goToMycourses}>
          Payment successful!
        </h1>
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}
      <div ref={paypal}></div>
    </div>
  );
}
