import { useContext } from "react";
import CartContext from "../../store/cart-context";

import CartItem from "./CartItem";
import Modal from "../UI/Modal";

import style from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const hasItems = ctx.items.length > 0;

  const orderHandler = () => {
    ctx.clearCart();
    console.log("ordering...");
    props.onClose();
  };

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={style["cart-items"]}>
      {ctx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={style.total}>
        <strong>Total amount</strong>
        <span>{totalAmount}</span>
      </div>
      <footer className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button className={style.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </footer>
    </Modal>
  );
};

export default Cart;
