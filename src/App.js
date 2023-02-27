import { useState } from "react";
import CartContextProvider from "./store/CartContextProvider";

import Header from "./components/Header";
import Cart from "./components/Cart";
import Meals from "./components/Meals/";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartContextProvider>
      <Header onShowCart={showCartHandler} />
      <main>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
