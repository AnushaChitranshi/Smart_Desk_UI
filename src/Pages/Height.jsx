import React, { useState } from "react";
import Counter from "../Components/Counter";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";

export default function Height() {
  const [count, setcount] = useState(3.0);

  const add = () => setcount((prev) => prev + 0.1);
  const subtract = () => setcount((prev) => prev - 0.1);
  const formattedCount = count.toFixed(1);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
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
        <button onClick={() => setIsOpen(true)}>
          <img
            className="Study_Icon"
            style={{
              width: 112,
              height: 91.13,
              left: 514,
              top: 160,
              position: "absolute",
            }}
            src="https://cdn-icons-png.flaticon.com/512/857/857511.png"
            alt="Loading..."
          />
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
          Mode set!
        </ReactModal>
      </div>
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
      <div
        style={{
          width: 96,
          height: 88,
          left: 36,
          top: 207,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 96,
            height: 88,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#F8F3F3",
            borderRadius: 10,
            border: "1px black solid",
          }}
        />
        <button onClick={add}>
          <img
            className="uparrow"
            style={{
              width: 70,
              height: 71,
              top: 13,
              left: 14,
              position: "absolute",
            }}
            src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/55201/red-triangle-pointed-up-emoji-clipart-md.png"
            alt="Loading..."
          />
        </button>
      </div>
      <div
        style={{
          width: 96,
          height: 88,
          left: 36,
          top: 317,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 96,
            height: 88,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#F8F3F3",
            borderRadius: 10,
            border: "1px black solid",
          }}
        />
        <button onClick={subtract}>
          <img
            className="downarrow"
            style={{
              width: 70,
              height: 71,
              top: 13,
              left: 13,
              position: "absolute",
            }}
            src=" https://creazilla-store.fra1.digitaloceanspaces.com/emojis/54648/red-triangle-pointed-down-emoji-clipart-md.png"
            alt="Loading..."
          />
        </button>
      </div>
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
        Desk Height{" "}
      </h3>
      <div
        style={{
          width: 91,
          height: 43,
          left: 38,
          top: 429,
          position: "absolute",
        }}
      >
        <div
          className="Current_Height"
          style={{
            width: 91,
            height: 43,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
            fontSize: 15,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        />
        <div
          style={{
            width: 61,
            height: 22,
            left: 26,
            top: 7,
            position: "absolute",
            color: "black",
            fontSize: 25,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          {formattedCount}
        </div>
      </div>
      <div
        style={{
          width: 91,
          height: 43,
          left: 278,
          top: 318,
          position: "absolute",
        }}
      >
        <div
          style={{
            width: 91,
            height: 43,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#D9D9D9",
          }}
        />
        <div
          style={{
            width: 61,
            height: 22,
            left: 27,
            top: 7,
            position: "absolute",
            color: "black",
            fontSize: 25,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          <Counter></Counter>
        </div>
      </div>
      <div
        style={{
          width: 91,
          height: 43,
          left: 524,
          top: 318,
          position: "absolute",
        }}
      >
        <div />
        <div
          style={{
            width: 61,
            height: 22,
            left: 26,
            top: 7,
            position: "absolute",
            color: "black",
            fontSize: 25,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          <Counter></Counter>
        </div>
      </div>
      <div
        style={{
          width: 91,
          height: 43,
          left: 743,
          top: 318,
          position: "absolute",
        }}
      >
        <div
        //   style={{
        //     width: 91,
        //     height: 43,
        //     left: 0,
        //     top: 0,
        //     position: "absolute",
        //     background: "#D9D9D9",
        //     alignContent: "center",
        //     justifyContent: "center",
        //   }}
        />
        <div
          style={{
            width: 61,
            height: 22,
            left: 26,
            top: 7,
            position: "absolute",
            color: "black",
            fontSize: 25,
            fontFamily: "Inter",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          <Counter></Counter>
        </div>
      </div>
      <button onClick={() => setIsOpen(true)}>
        <img
          className="Game_Icon"
          style={{
            width: 117,
            height: 117,
            left: 265,
            top: 148,
            position: "absolute",
          }}
          src="https://cdn-icons-png.flaticon.com/512/686/686589.png"
          alt="Loading..."
        />
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
        Mode set!
      </ReactModal>
      <div
        style={{
          width: 116,
          height: 32,
          left: 266,
          top: 271,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 20,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Game{" "}
      </div>
      <div
        style={{
          width: 116,
          height: 32,
          left: 26,
          top: 483,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 20,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Height
      </div>
      <div
        style={{
          width: 116,
          height: 32,
          left: 510,
          top: 271,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 20,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Study
      </div>
      <div
        style={{
          width: 145,
          height: 32,
          left: 720,
          top: 271,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 20,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Standing Desk
      </div>
      <button onClick={() => setIsOpen(true)}>
        <img
          className="Standing_Icon"
          style={{
            width: 79,
            height: 79,
            left: 749,
            top: 165,
            position: "absolute",
          }}
          src="https://static.thenounproject.com/png/3968772-200.png"
          alt="Loading..."
        />
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
        Mode set!
      </ReactModal>
      <div
        style={{
          width: 126,
          height: 37,
          left: 737,
          top: 502,
          position: "absolute",
          background: "#F8F3F3",
          borderRadius: 10,
          border: "1px black solid",
        }}
      />
      <button>
        {" "}
        <div
          style={{
            width: 83,
            height: 5,
            left: 759,
            top: 507,
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: 20,
            fontFamily: "Lusitana",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          Save
        </div>
      </button>
    </div>
  );
}
