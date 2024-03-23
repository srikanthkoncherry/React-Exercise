import React, { useState } from "react";
import "./style-panel.css";
import FormattedPrice from "./FormattedPrice";

export default function Panel({ data, propCart }) {
  const { cartState, setCartState } = propCart;

  const [cntItem, setCntItem] = useState(0);

  const handleIncrement = () => {
    setCntItem(cntItem + 1);
    updateCart(data.price);
  };

  const handleDecrement = () => {
    if (cntItem > 0) {
      setCntItem(cntItem - 1);
      updateCart(-data.price);
    }
  };

  const updateCart = (priceDifference) => {
    const updatedItems =
      cntItem > 0
        ? [...cartState.items, data.title]
        : cartState.items.filter((item) => item !== data.title);
    propCart.setCartState({
      number: cartState.number + (priceDifference > 0 ? 1 : -1),
      items: updatedItems,
      totalPrice: cartState.totalPrice + priceDifference,
    });
  };

  return (
    <div className="card">
      <img src={data.img} width="100px" height="100px" alt={data.title} />
      <h3>{data.title}</h3>
      <FormattedPrice a={data.price} />
      <span>{data.info}</span>
      <div className="frm">
        <button onClick={handleDecrement}> - </button>
        <div className="itemsAdded">{cntItem}</div>
        <button onClick={handleIncrement}> + </button>
      </div>
    </div>
  );
}
