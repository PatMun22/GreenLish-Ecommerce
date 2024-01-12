/* eslint-disable react/prop-types */
import "./cart.scss";

import CartOptionButtons from "../../components/cartOptionButtons/CartOptionButtons";
import CartTable from "../../components/cartTable/CartTable";
import CartCheckout from "../../components/cartCheckout/CartCheckout";
// import { useContext } from "react";
// import { ShopContext } from "../../context/ShopContext";

const Cart = () => {
  // const { getTotalCartAmount, getNumberOfCartItems } = useContext(ShopContext);

  // let totalAmount = getTotalCartAmount();
  // let totalCartItems = getNumberOfCartItems();

  return (
    <div className="cart">
      <CartTable />
      <CartOptionButtons />
      <CartCheckout />
    </div>
  );
};

export default Cart;
