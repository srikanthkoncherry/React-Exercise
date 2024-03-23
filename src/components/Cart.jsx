import React, { useState } from "react";

export default function Cart({ cartData }) {
  console.log(cartData);
  return (
    <div className="cart">
      <div className="cartObj">{cartData.number}</div>
      <img className="cartImg" src="../products/cart.jpg" alt="" />
    </div>
  );
}
