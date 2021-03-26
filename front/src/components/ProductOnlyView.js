import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/Context";
import { useContext } from "react";

export default function ProductOnlyView({ product }) {
  const { myPurchase, setMyPurchase } = useContext(GlobalContext);
  let history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <div className="product-css">
        <h3 className="course-name">{product.name}</h3>
        <div className="course-details">
          <p>DURATION:{product.duration}</p>
          <p>PRICE: € {Number(product.price).toFixed(2)}</p>
          <p>{product.description}</p>
          <p>{product.more}</p>
        </div>

        <button className="buyNow" onClick={goToLogin}>
          Sign in and buy now!
        </button>
      </div>
    </div>
  );
}
