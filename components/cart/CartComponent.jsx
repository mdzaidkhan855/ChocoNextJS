"use client";

// components/Cart.js
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const router = useRouter();
  console.log("cartItems:", cartItems);
  const goToHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <ul>
        {cartItems.map((item) => {
          let total = item.price * item.quantity;
          return <li key={item.id}>Total : {total}</li>;
        })}
      </ul>
      <button onClick={goToHome}>Home</button>
    </div>
  );
};

export default CartComponent;
