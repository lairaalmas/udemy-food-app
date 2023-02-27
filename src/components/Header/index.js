import HeaderCartButton from "./HeaderCartButton";

import style from "./Header.module.css";

import headerImgSrc from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={style["main-image"]}>
        <img src={headerImgSrc} alt="A table with food." />
      </div>
    </>
  );
};

export default Header;
