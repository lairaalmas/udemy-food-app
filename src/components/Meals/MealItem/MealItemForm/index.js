import { useRef, useState } from "react";

import Input from "../../../UI/Input";

import style from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(true);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={style.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountRef}
        className={style.form}
        label="Amount:"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button type="submit">+ Add</button>

      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
