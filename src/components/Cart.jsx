import React, { useState } from "react";

export default function Cart({ cartData }) {
  console.log(cartData);
  return <div className="cart">Items in Cart: {cartData.number}</div>;
}
