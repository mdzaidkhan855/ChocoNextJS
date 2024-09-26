"use client";

import { useState } from "react";
import styles from "./product.module.css";

// components/ProductCard.js
import { useDispatch } from "react-redux";
import { addToCart } from "@/cart/cartSlice";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  // State to handle the visibility of the overlay
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  // Function to open overlay
  const handleCardClick = () => {
    setOverlayVisible(true);
  };

  // Function to close overlay
  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  const router = useRouter();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setOverlayVisible(false);
    router.push("/cart");
  };

  return (
    <div>
      <div className={styles.card} onClick={handleCardClick}>
        <img src={product.image} alt="preview" />
        <p>{product.name}</p>
      </div>

      {/* Overlay Component */}
      {isOverlayVisible && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button className={styles.closeButton} onClick={closeOverlay}>
              Close
            </button>
            <button className={styles.addButton} onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
