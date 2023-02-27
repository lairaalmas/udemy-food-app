import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";

import CartIcon from "../../../assets/CartIcon";

import style from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const ctx = useContext(CartContext);

  const { items } = ctx;

  const numberOfCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnClasses = `${style.button} ${buttonIsHighlighted ? style.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} type="button" onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
