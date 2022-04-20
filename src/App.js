import { useState } from "react";
import "./App.css";
import Checkout from "./components/Checkout";
import Products from "./components/Products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <div className="products">
        <Products setCartItems={setCartItems} cartItems={cartItems} />
      </div>
      <div className="checkout">
        <Checkout cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
