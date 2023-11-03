import React from "react";
import { Link } from "react-router-dom";

function TurnOff() {
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <img
          style={{
            width: 916,
            height: 578,
            left: 0,
            top: 0,
            position: "absolute",
            borderRadius: 20,
            border: "1px black solid",
          }}
          src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm428-0019-x.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=16c4ed18afc4ccfb86f468a829d23a1d"
          alt="Loading..."
        />
        <Link to="/">
          <button>
            <img
              style={{
                width: 62,
                height: 62,
                left: 423,
                top: 257,
                position: "absolute",
              }}
              src="https://cdn-icons-png.flaticon.com/512/92/92961.png"
              alt="Turn On"
            />
          </button>
        </Link>
      </div>
    </>
  );
}

export default TurnOff;
