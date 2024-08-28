import React, { useEffect, useState } from "react";
// import { UpdateCart } from "../services/portfolioServices";
// import { useInterval } from "./hooks";
import "./numberSpinner.css";

export default function NumberSpinner({ portfolioCartId, qnt, itemId, steps, cartItems, setCartItems, setConfirmationOpen }) {
  const [value, setValue] = useState(qnt);
  const [mouseDownDirection, setMouseDownDirection] = useState(null);
  const max = (num) => (num < 0 ? 4 : 3);

  const updateCartValue = async (value) => {
    // const _cartItems = cartItems.map((item) => (item.portfolioId === itemId ? { ...item, quantity: value } : item));
    // setCartItems(_cartItems);
  };

  // handle change
  const handleChange = ({ currentTarget: { value } }) => {
    // setValue((curr) => {
    //   if (!Boolean(value)) {
    //     return 0;
    //   }
    //   const numeric = parseInt(value, 10);
    //   const maxLength = max(numeric);

    //   if (value.length > maxLength) {
    //     return curr;
    //   }

    //   return value.length <= maxLength ? numeric : curr;
    // });
  };

  // handle button change
  const handleButtonChange = (direction) => {
    // let next;

    // switch (direction) {
    //   case "up":
    //     next = value + (steps || 1);
    //     break;
    //   case "down":
    //     next = value - (steps || 1) >= 0 ? value - (steps || 1) : 0;
    //     break;
    //   default:
    //     next = value;
    //     break;
    // }
    // if (next !== 0) {
    //   updateCartValue(next);
    // }

    // setValue((curr) => {
    //   return `${next}`.length <= max(curr) ? next : curr;
    // });
  };

  return (
    <div className="input-number">
      <button
        // onClick={() => handleButtonChange("down")}
        // onMouseDown={() => setMouseDownDirection("down")}
        // onMouseOut={() => setMouseDownDirection(null)}
        // onMouseUp={() => setMouseDownDirection(null)}
        disabled={value === 1}
      >
        -
      </button>
      <input type="number" step={steps} value={value} onChange={handleChange} />
      <button
      // onClick={() => handleButtonChange("up")}
      // onMouseDown={() => setMouseDownDirection("up")}
      // onMouseUp={() => setMouseDownDirection(null)}
      // onMouseOut={() => setMouseDownDirection(null)}
      >
        +
      </button>
    </div>
  );
}
