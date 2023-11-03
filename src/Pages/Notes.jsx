import { useState } from "react";
import produce from "immer";
import { Link } from "react-router-dom";

const Notes = (props) =>
  props.data.map((note, index) => (
    <div
      key={index}
      style={{
        position: "relative",
        top: 45,
        left: 5,
        width: 350,
        margin: "10px",
        padding: "10px",
        fontSize: 15,
        fontFamily: "Inter",
        fontWeight: "400",
        wordWrap: "break-word",
      }}
    >
      {note.text}
    </div>
  ));

// eslint-disable-next-line import/no-anonymous-default-export
function Note() {
  const initialData = [{ text: "" }, { text: "" }];
  const [data, setData] = useState(initialData);

  const handleClick = () => {
    const text = document.querySelector("#noteinput").value.trim();
    if (text) {
      const nextState = produce(data, (draftState) => {
        draftState.push({ text });
      });
      document.querySelector("#noteinput").value = "";
      setData(nextState);
    }
  };

  return (
    <>
      <div
        style={{
          width: 916,
          height: 578,
          left: 0,
          top: 0,
          position: "relative",
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
        <h1
          style={{
            position: "absolute",
            left: 50,
            top: 20,
            fontFamily: "Lusitana",
            fontWeight: "400",
            wordWrap: "break-word",
          }}
        >
          Notes
        </h1>
        <>
          <br></br>
          <input
            id="noteinput"
            style={{ width: 650, left: 20, top: 100, position: "absolute" }}
            type="text"
            placeholder="Enter a new note"
          />
          <button
            style={{ width: 85, left: 680, top: 104, position: "absolute" }}
            onClick={() => handleClick()}
          >
            Add note
          </button>
          <Notes data={data} />
        </>
      </div>
    </>
  );
}

export default Note;
