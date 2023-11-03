import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(3.5);

  const add = () => setcount((prev) => prev + 0.1);
  const subtract = () => setcount((prev) => prev - 0.1);

  // Format the count value to have only two decimal places
  const formattedCount = count.toFixed(1);

  return (
    <div
      className=""
      style={{
        width: 91,
        height: 43,
        left: -25,
        top: -6,
        position: "absolute",
        background: "#F8F3F3",
        color: "black",
        fontSize: 15,
        fontFamily: "Inter",
        fontWeight: "400",
        wordWrap: "break-word",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <h4 className="">{formattedCount}</h4>
      <div
        className=""
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <button className="" onClick={add}>
          +
        </button>
        <button className="" onClick={subtract}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
