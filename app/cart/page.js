"use client";

// components/Cart.js
import { Provider } from "react-redux";
import store from "@/cart/store";
import CartComponent from "@/components/cart/CartComponent";

const Cart = () => {
  return (
    <div>
      <Provider store={store}>
        <CartComponent />
      </Provider>
    </div>
  );
};

export default Cart;
