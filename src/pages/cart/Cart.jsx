/* eslint-disable react/prop-types */
import "./cart.scss";

import CartOptionButtons from "../../components/cartOptionButtons/CartOptionButtons";
import CartTable from "../../components/cartTable/CartTable";
import CartCheckout from "../../components/cartCheckout/CartCheckout";

const Cart = () => {
  return (
    <div className="cart">
      <CartTable />
      <CartOptionButtons />
      <CartCheckout />
    </div>
  );
};

export default Cart;
