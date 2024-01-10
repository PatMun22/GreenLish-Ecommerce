/* eslint-disable react/prop-types */
import "./tableRow.scss";

const TableRow = ({ item }) => {
  return (
    <tr>
      <td>
        <img src={item.image} />
      </td>
      <td>{item.title}</td>
      <td>Ksh. {item.price}</td>
      <td>
        <div className="incdec-buttons">
          <button>-</button>
          {0}
          <button>+</button>
        </div>
      </td>
      <td>Ksh. {0}</td>
      <td>
        <button>X</button>
      </td>
    </tr>
  );
};

export default TableRow;
