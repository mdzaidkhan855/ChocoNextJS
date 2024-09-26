"use client";

import React from "react";
import ProductCard from "./ProductCard";
import styles from "./product.module.css";
import { Provider } from "react-redux";
import store from "@/cart/store";

export default function ProductCardList({ products }) {
  return (
    <Provider store={store}>
      <div className={`${styles.cardList}`}>
        {products.length === 0 ? (
          <p>No Products</p>
        ) : (
          <>
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </>
        )}
      </div>
    </Provider>
  );
}
