import ModalButton from "./ModalButton";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/Context";
import { useContext } from "react";

export default function Product({ product }) {
  const { myPurchase, setMyPurchase } = useContext(GlobalContext);
  let history = useHistory();

  const handleCheckout = () => {
    console.log(product);
    setMyPurchase(product);
    history.push("/checkout");
  };

  return (
    <div>
      <div className="product-css">
        <h3 className="course-name">{product.name}</h3>
        <div className="course-details">
          <p>DURATION:{product.duration}</p>
          <p>PRICE: €{product.price}</p>
          <p>{product.description}</p>
          <p>{product.more}</p>
        </div>
        {/* <ModalButton /> */}
        <button className="buyNow" onClick={handleCheckout}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
