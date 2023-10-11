import React, { useState, useEffect } from "react";

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 60000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    // <div>
    //   <p> </p>
    //   <p> </p>
    // </div>

    <div
      style={{
        width: 447,
        height: 37,
        left: 700,
        top: 25,
        position: "absolute",
        color: "black",
        fontSize: 20,
        fontFamily: "Lusitana",
        fontWeight: "400",
        wordWrap: "break-word",
      }}
    >
      Time : {date.toLocaleTimeString()} <br></br>
      Date : {date.toLocaleDateString()}
    </div>
  );
};

export default DateTime;
