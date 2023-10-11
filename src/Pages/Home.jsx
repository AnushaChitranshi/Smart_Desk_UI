import React from "react";
import DateTime from "../Components/DateTime";
import { Link } from "react-router-dom";

function Home() {
  const redirectToNotion = () => {
    // Redirect to the Notion website
    window.location.href = "https://www.notion.so";
  };
  return (
    /* The screen starts here */
    <div
      style={{
        width: 916,
        height: 578,
        left: 0,
        top: 0,
        position: "relative",
      }}
    >
      <img
        className="bg_image"
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
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          className="topbar"
          style={{
            width: 871.78,
            height: 71,
            left: 15,
            top: 20,
            position: "absolute",
            background: "white",
            borderRadius: 20,
            border: "1px black solid",
          }}
        ></div>
        <DateTime></DateTime>

        <div
          className="weather"
          style={{
            width: 190.35,
            height: 24.29,
            left: 96.94,
            top: 42,
            position: "absolute",
            color: "black",
            fontSize: 20,
            fontFamily: "Lusitana",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          78* F, Mostly Sunny
        </div>
        <div
          className="weather-icon"
          style={{
            width: 46.7,
            height: 41.11,
            left: 35,
            top: 36,
            position: "absolute",
            background: "#FEF40A",
            borderRadius: 9999,
          }}
        />
      </div>
      <div
        style={{
          width: 320,
          height: 53,
          left: 21,
          top: 103,
          position: "absolute",
        }}
      >
        <div
          className="hello_bg"
          style={{
            width: 235,
            height: 44,
            left: 0,
            top: 0,
            position: "absolute",
            background: "white",
            borderRadius: 20,
          }}
        />
        <div
          className="hello"
          style={{
            width: 306,
            height: 49,
            left: 14,
            top: 4,
            position: "absolute",
            color: "black",
            fontSize: 30,
            fontFamily: "Lusitana",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Hello Anusha!
        </div>
      </div>
      <Link to="/height">
        <button
          className="desk_height_icon"
          style={{
            width: 105,
            height: 103,
            left: 106,
            top: 174,
            position: "absolute",
            background: "#F8F3F3",
            borderRadius: 20,
            border: "1px #FFCDCD solid",
          }}
        />
      </Link>
      <Link to="/height">
        <button>
          <img
            className="height_icon"
            style={{
              width: 85,
              height: 60,
              left: 118,
              top: 197,
              position: "absolute",
            }}
            src="https://cdn-icons-png.flaticon.com/512/3663/3663613.png"
            alt="Loading..."
          />
        </button>
      </Link>
      <div
        className="desk_height"
        style={{
          width: 116,
          height: 32,
          left: 115,
          top: 294,
          position: "absolute",
          color: "black",
          fontSize: 17,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Desk Height
      </div>
      <Link to="/devices">
        <button
          className="devices_icon"
          style={{
            width: 105,
            height: 103,
            left: 305,
            top: 174,
            position: "absolute",
            background: "#F8F3F3",
            borderRadius: 20,
            border: "1px #FFCDCD solid",
          }}
        />
      </Link>
      <Link to="/devices">
        <button>
          <img
            className="device_icon"
            style={{
              width: 80,
              height: 60,
              left: 320,
              top: 197,
              position: "absolute",
            }}
            src=" https://static.thenounproject.com/png/4080655-200.png"
            alt="Loading..."
          />
        </button>
      </Link>
      <div
        className="devices"
        style={{
          width: 79,
          height: 32,
          left: 325,
          top: 296,
          position: "absolute",
          color: "black",
          fontSize: 18,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Devices
      </div>

      <Link to="/todo">
        <button
          className="todo_list_icon"
          style={{
            width: 105,
            height: 103,
            left: 505,
            top: 174,
            position: "absolute",
            background: "#F8F3F3",
            borderRadius: 20,
            border: "1px #FFCDCD solid",
          }}
        />
      </Link>

      <Link to="/todo">
        <button>
          <img
            className="todo_icon"
            style={{
              width: 70,
              height: 60,
              left: 524,
              top: 197,
              position: "absolute",
            }}
            src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png"
            alt="Loading..."
          />
        </button>
      </Link>

      <div
        className="todo_list"
        style={{
          width: 84,
          height: 32,
          left: 523,
          top: 296,
          position: "absolute",
          color: "black",
          fontSize: 17,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        To-Do List
      </div>
      <Link to="/calendar">
        <button
          className="calendar_icon"
          style={{
            width: 105,
            height: 103,
            left: 704,
            top: 174,
            position: "absolute",
            background: "#F8F3F3",
            borderRadius: 20,
            border: "1px #FFCDCD solid",
          }}
        />
      </Link>

      <Link to="/calendar">
        <button>
          <img
            className="cal_icon"
            style={{
              width: 70,
              height: 60,
              left: 722,
              top: 197,
              position: "absolute",
            }}
            src="https://www.iconarchive.com/download/i103365/paomedia/small-n-flat/calendar.1024.png"
            alt="Loading..."
          />
        </button>
      </Link>

      <div
        className="calendar"
        style={{
          width: 83,
          height: 32,
          left: 718,
          top: 296,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 18,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Calendar
      </div>

      <Link to="/notes">
        <button
          className="notes_icon"
          style={{
            width: 105,
            height: 103,
            left: 106,
            top: 337,
            position: "absolute",
            background: "#F8F3F3",
            borderRadius: 20,
            border: "1px #FFCDCD solid",
          }}
        />
      </Link>
      <Link to="/notes">
        <button>
          <img
            className="note_icon"
            style={{
              width: 65,
              height: 55,
              left: 132,
              top: 363,
              position: "absolute",
            }}
            src="https://cdn-icons-png.flaticon.com/512/1024/1024824.png"
            alt="Loading..."
          />
        </button>
      </Link>

      <div
        className="notes"
        style={{
          width: 82,
          height: 32,
          left: 114,
          top: 456,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 18,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Notes
      </div>

      <Link to="/reminder">
        <button
          className="reminders_icon"
          style={{
            width: 105,
            height: 103,
            left: 305,
            top: 337,
            position: "absolute",
            background: "#F8F3F3",
            borderRadius: 20,
            border: "1px #FFCDCD solid",
          }}
        />
      </Link>
      <Link to="/reminder">
        <button>
          <img
            className="reminder_icon"
            style={{
              width: 55,
              height: 55,
              left: 330,
              top: 363,
              position: "absolute",
            }}
            src="https://cdn-icons-png.flaticon.com/512/4285/4285654.png"
            alt="Loading..."
          />
        </button>
      </Link>
      <div
        className="reminders"
        style={{
          width: 103,
          height: 32,
          left: 309,
          top: 455,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 18,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Reminders
      </div>

      <button
        className="notion_icon"
        style={{
          width: 105,
          height: 103,
          left: 505,
          top: 337,
          position: "absolute",
          background: "#F8F3F3",
          borderRadius: 20,
          border: "1px #FFCDCD solid",
        }}
        onClick={redirectToNotion}
      />
      <button>
        <img
          className="notion_logo"
          style={{
            width: 55,
            height: 55,
            left: 530,
            top: 363,
            position: "absolute",
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
          alt="Loading..."
          onClick={redirectToNotion}
        />
      </button>

      <div
        className="notion"
        style={{
          width: 103,
          height: 32,
          left: 507,
          top: 455,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 18,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Notion
      </div>
      <button
        className="power_icon"
        style={{
          width: 100,
          height: 96,
          left: 704,
          top: 337,
          position: "absolute",
          background: "#F8F3F3",
          borderRadius: 20,
          border: "1px #FFCDCD solid",
        }}
      />
      <Link to="/off">
        <button>
          <img
            className="power_logo"
            style={{
              width: 55,
              height: 55,
              left: 728,
              top: 359,
              position: "absolute",
            }}
            src="https://cdn-icons-png.flaticon.com/512/92/92961.png"
            alt="Loading..."
          />
        </button>
      </Link>

      <div
        className="power"
        style={{
          width: 103,
          height: 32,
          left: 705,
          top: 452,
          position: "absolute",
          textAlign: "center",
          color: "black",
          fontSize: 18,
          fontFamily: "Lusitana",
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        Turn off
      </div>
    </div>
  );
}

export default Home;
