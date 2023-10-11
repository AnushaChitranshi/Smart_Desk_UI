import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleSwitch from "../Components/Toggle";
import ReactModal from "react-modal";

export default function Devices() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        background: "white",
      }}
    >
      <div
        style={{
          width: 916,
          height: 578,
          left: 0,
          top: 0,
          position: "absolute",
        }}
      >
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
        <div
          style={{
            width: 137,
            height: 30,
            left: 495,
            top: 265,
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: 20,
            fontFamily: "Lusitana",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Anusha’s iPhone
          <br></br>
          <ToggleSwitch></ToggleSwitch>
        </div>
        <div
          style={{
            width: 137,
            height: 30,
            left: 698,
            top: 265,
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: 20,
            fontFamily: "Lusitana",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Anusha’s iPad
          <ToggleSwitch></ToggleSwitch>
        </div>
      </div>
      <div
        style={{
          width: 862,
          height: 0,
          left: 25,
          top: 77,
          position: "absolute",
          border: "1px black solid",
        }}
      ></div>
      <Link to="/">
        <button>
          <img
            style={{
              width: 51,
              height: 47,
              left: 821,
              top: 27,
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
          top: 35,
          fontFamily: "Lusitana",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Devices
      </h3>
      <div
        style={{
          width: 109,
          height: 101,
          left: 85,
          top: 150,
          position: "absolute",
          background: "#F8F3F3",
          borderRadius: 10,
          border: "1px black solid",
        }}
      />
      <img
        style={{
          width: 76,
          height: 72,
          left: 100,
          top: 166,
          position: "absolute",
        }}
        src="https://cdn-icons-png.flaticon.com/512/15/15094.png"
        alt="Loading..."
      ></img>

      <div
        style={{
          width: 109,
          height: 101,
          left: 300,
          top: 150,
          position: "absolute",
          background: "#F8F3F3",
          borderRadius: 10,
          border: "1px black solid",
        }}
      />
      <img
        style={{
          width: 76,
          height: 72,
          left: 318,
          top: 166,
          position: "absolute",
        }}
        src="https://cdn-icons-png.flaticon.com/512/15/15094.png"
        alt="Loading..."
      ></img>
      <div
        style={{
          width: 109,
          height: 101,
          left: 506,
          top: 150,
          position: "absolute",
          background: "#F8F3F3",
          borderRadius: 10,
          border: "1px black solid",
        }}
      />

      <img
        style={{
          width: 76,
          height: 72,
          left: 524,
          top: 166,
          position: "absolute",
        }}
        src="https://static.thenounproject.com/png/4138384-200.png"
        alt="Loading..."
      ></img>

      <div
        style={{
          width: 109,
          height: 101,
          left: 708,
          top: 150,
          position: "absolute",
          background: "#F8F3F3",
          borderRadius: 10,
          border: "1px black solid",
        }}
      />
      <img
        style={{
          width: 76,
          height: 72,
          left: 725,
          top: 166,
          position: "absolute",
        }}
        src="https://static.thenounproject.com/png/59635-200.png"
        alt="Loading..."
      ></img>
      <div
        style={{
          width: 101,
          height: 30,
          left: 97,
          top: 265,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Lusitana",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Monitor 1<ToggleSwitch></ToggleSwitch>
      </div>
      <div
        style={{
          width: 101,
          height: 30,
          left: 312,
          top: 265,
          position: "absolute",
          color: "black",
          fontSize: 20,
          fontFamily: "Lusitana",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Monitor 2 <ToggleSwitch></ToggleSwitch>
      </div>

      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: 126,
            height: 37,
            left: 736,
            top: 503,
            position: "absolute",
            background: "#F8F3F3",
            borderRadius: 10,
            border: "1px black solid",
            textAlign: "center",
            color: "black",
            fontSize: 20,
            fontFamily: "Lusitana",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Focus
        </button>
        <ReactModal
          style={{
            position: "relative",
            width: 300,
            height: 100,
            top: 250,
            left: 300,
            background: "white",
            borderRadius: 10,
            padding: 20,
          }}
          isOpen={isOpen}
          contentLabel="Example Modal"
          onRequestClose={() => setIsOpen(false)}
        >
          All devices have been turned to do not disturb.
        </ReactModal>
      </div>
    </div>
  );
}
