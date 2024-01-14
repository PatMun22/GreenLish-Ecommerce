/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./tableRow.scss";
import { ShopContext } from "../../context/ShopContext";

const TableRow = ({ item }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <tr>
      <td>
        <img src={item.image} />
      </td>
      <td>{item.title}</td>
      <td>Ksh. {item.price}</td>
      <td>
        <div className="incdec-buttons">
          <button onClick={() => removeFromCart(item.id)}>-</button>
          <input
            value={cartItems[item.id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), item.id)
            }
          />
          <button onClick={() => addToCart(item.id)}>+</button>
        </div>
      </td>
      <td>Ksh. {cartItems[item.id] * item.price}</td>
      <td>
        <button onClick={() => removeFromCart(item.id)}>x</button>
      </td>
    </tr>
  );
};

export default TableRow;
