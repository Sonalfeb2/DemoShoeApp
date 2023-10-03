import "./ShoesList.css";
import CartContext from "../store/CartContext";
import { useContext } from "react";
const ShoesList = ({ ProductList }) => {
    const ctx = useContext(CartContext);

    const addItemHandler = (item,size)=>{
      ctx.addItem({...item , size:[size]})
    }
  return (
    <div>
     
      <h1>Shoe List</h1>
      <table>
        <thead>
          <tr>
            <th>Shoe Names</th>
            <th>Price</th>
            <th>Description</th>
            <th>Size</th>
          </tr>
        </thead>

        <tbody>
          {ProductList.map(item =>
            <tr key={item.id}>
              <td>
                {item.shoesName}
              </td>
              <td>
                Rs:{item.price}
              </td>
              <td>
                {item.des}
              </td>
              <td>
                {item.sm > 0 &&
                  <button onClick={() => addItemHandler(item,'sm')}>
                    {`Small (${item.sm})`}
                  </button>}
                {item.m > 0 &&
                  <button onClick={() => addItemHandler(item,'m')}>
                    {`Medium (${item.m})`}
                  </button>}
                {item.l > 0 &&
                  <button onClick={() => addItemHandler(item,'l')}>
                    {`Large (${item.l})`}
                  </button>}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default ShoesList;
