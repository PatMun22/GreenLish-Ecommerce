import "./cartOptionButtons.scss";
import { useNavigate } from "react-router-dom";

const CartOptionButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="cart-btn-container">
      <div className="cart-option-btns">
        <button onClick={() => navigate("/")}>Buy More</button>
        <button>Update Cart</button>
      </div>
    </div>
  );
};

export default CartOptionButtons;
