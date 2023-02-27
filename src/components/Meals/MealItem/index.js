import { useContext } from "react";
import CartContext from "../../../store/cart-context";

import MealItemForm from "./MealItemForm";

import style from "./MealItem.module.css";

const MealItem = (props) => {
  const ctx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={style.meal}>
      <div>
        <h3>{props.name}</h3>

        <div className={style.description}>{props.description}</div>

        <div className={style.price}>{price}</div>
      </div>

      <MealItemForm id={props.id} onAddToCart={addItemToCartHandler} />
    </li>
  );
};
export default MealItem;
