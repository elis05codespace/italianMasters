import { useState } from "react";
import PayPal from "./PayPal";
import { GlobalContext } from "../context/Context";
import { useContext } from "react";

export default function Checkout() {
  const [checkout, setCheckOut] = useState(false);

  const { myPurchase, setMyPurchase } = useContext(GlobalContext);

  const course = {
    desc: myPurchase.name,
    value: myPurchase.price,
    id: myPurchase.id,
  };
  return (
    <div className="container checkout">
      {checkout ? ( //if we are in the checkout page we want to render the following
        <PayPal course={course} />
      ) : (
        <button
          id="checkout"
          className="button-checkout"
          onClick={() => {
            setCheckOut(true);
          }}
        >
          Checkout
        </button>
      )}
    </div>
  );
}
