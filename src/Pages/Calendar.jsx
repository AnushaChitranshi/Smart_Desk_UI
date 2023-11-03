import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";

function Calendars() {
  const [value, onChange] = useState(new Date());

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 916,
          height: 578,
          left: 0,
          top: 0,
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 20,
          border: "1px black solid",
          backgroundImage:
            'url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm428-0019-x.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=16c4ed18afc4ccfb86f468a829d23a1d")',
        }}
      >
        <div
          style={{
            width: 862,
            height: 0,
            left: 22,
            top: 69,
            position: "absolute",
            border: "1px black solid",
          }}
        ></div>
        <Link to="/">
          <button>
            <img
              className="Home_Icon"
              style={{
                width: 51,
                height: 47,
                left: 820,
                top: 18,
                position: "absolute",
              }}
              src="https://cdn-icons-png.flaticon.com/512/7133/7133312.png"
              alt="Loading..."
            />
          </button>
        </Link>
        <h3
          style={{
            position: "absolute",
            left: 50,
            top: 29,
            fontFamily: "Lusitana",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          {" "}
          Calendar{" "}
        </h3>
        <br></br> <br></br>
        <br></br> <br></br>
        <div
          className="calendar-container"
          style={{
            position: "relative",
            top: 30,
            left: 250,
          }}
        >
          <Calendar onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
}

export default Calendars;
