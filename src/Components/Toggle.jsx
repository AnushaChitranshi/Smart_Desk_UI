import React, { useState } from "react";
import ReactSwitch from "react-switch";

function ToggleSwitch() {
  const [checked, setChecked] = useState(false);

  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <div className="toggle" style={{ textAlign: "center" }}>
      <br></br>
      <ReactSwitch checked={checked} onChange={handleChange} />
      <div
        style={{
          textAlign: "center",
          color: "black",
          fontSize: 15,
          fontFamily: "Lusitana",
          wordWrap: "break-word",
        }}
      >
        Focus
      </div>
    </div>
  );
}

export default ToggleSwitch;
