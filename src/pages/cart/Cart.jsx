/* eslint-disable react/prop-types */
import "./cart.scss";

import CartOptionButtons from "../../components/cartOptionButtons/CartOptionButtons";
import CartTable from "../../components/cartTable/CartTable";
import CartCheckout from "../../components/cartCheckout/CartCheckout";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Cart = () => {
  const { getTotalCartAmount } = useContext(ShopContext);

  let totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <CartTable />
      <CartOptionButtons />
      {totalAmount > 0 ? (
        <CartCheckout />
      ) : (
        <p className="empty-cart">Your Cart is Empty!</p>
      )}
    </div>
  );
};

export default Cart;
