import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Topic from "../Topic/Topic";
import "./Health.css";

const Health = () => {
  const [healthyLife, setHealthyLife] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("generated.json")
      .then((res) => res.json())
      .then((data) => setHealthyLife(data));
  }, []);

  const handleAddToCart = (healthy) => {
    const newCart = [...cart, healthy];
    setCart(newCart);
  };

  return (
      <div className="w-full">
        <div className="grid md:grid-cols-3">
          <div className="col-span-2">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 mt-10 px-5 py-5 gap-5">
              {healthyLife.map((healthy) => (
                <Topic
                  key={healthy.id}
                  healthy={healthy}
                  handleAddToCart={handleAddToCart}
                ></Topic>
              ))}
            </div>
          </div>

          <div className="cart-container bg-gray-200">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    
  );
};

export default Health;
