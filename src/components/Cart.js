import { useContext, useState } from "react";
import CartContext from "../store/CartContext";
import Modal from "./Modal";
const Cart = () => {
  const ctx = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const Modalhandler = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <button onClick={() => setShowModal(!showModal)}>
        Cart {ctx.totalCount}
      </button>
      {showModal &&
        <Modal showModalHandler={Modalhandler}>
          <div>
            {ctx.items.map(item =>
              <div style={{ display: "flex" }}>
                <p style={{ width: "90%" }}>
                  {item.shoesName}, Quantity- {item.count}, Size-<span>
                    {item.size.map(size =>
                      <span>
                        {size==='sm'&& 'Small'} {size==='m'&& 'Medium'}  {size==='l'&&'large'}
                      </span>
                    )}
                  </span>
                </p>
                <p>
                  Rs.{item.price}
                </p>
              </div>
            )}
          </div>
          <hr />
          <div>
            Total Amount : {ctx.totalAmount}
          </div>
        </Modal>}
    </div>
  );
};
export default Cart;
