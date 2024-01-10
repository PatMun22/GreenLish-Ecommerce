/* eslint-disable react/prop-types */
import "./cart.scss";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import TableRow from "../../components/tableRow/TableRow";

const Cart = () => {
  const { items, cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <table>
        <thead>
          <td>IMAGE</td>
          <td>PRODUCTS</td>
          <td>PRICE</td>
          <td>QUANTITY</td>
          <td>TOTAL</td>
          <td>X</td>
        </thead>
        <tbody>
          {items.map((item) => {
            if (cartItems[item.id] !== 0) {
              return <TableRow item={item} key={item.id} />;
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
