import Panel from "./components/Panel";
import Cart from "./components/Cart";

import { useState } from "react";

function App() {
  const [cartState, setCartState] = useState({
    items: [],
    number: 0,
    totalPrice: 0,
  });

  const data = [
    {
      id: 1,
      img: "./products/Product_01.jpg",
      title: "Product 1",
      info: "This is a product!",
      price: 29.99,
    },
    {
      id: 2,
      img: "./products/Product_02.jpg",
      title: "Product 2",
      info: "This is a product!",
      price: 222.95,
    },
    {
      id: 3,
      img: "./products/Product_03.jpg",
      title: "Product 3",
      info: "This is a product!",
      price: 88.12,
    },
    {
      id: 4,
      img: "./products/Product_04.jpg",
      title: "Product 4",
      info: "This is a product!",
      price: 22.23,
    },
  ];
  console.log(cartState);
  return (
    <div>
      <div className="main">
        <Cart cartData={cartState} />
        <div className="cards">
          {data.map((d) => (
            <Panel data={d} key={d.id} propCart={{ cartState, setCartState }} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
