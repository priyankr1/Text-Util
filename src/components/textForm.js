import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text?.toUpperCase();
    setText(newText);
    props.showAlert("Text has been Change in uper case", "success");
  };
  const handleloClick = () => {
    let newText = text?.toLowerCase();
    setText(newText);
    props.showAlert("Text has been Change in lower case", "success");
  };
  const handleupclear = () => {
    setText("");
    props.showAlert("Text has been clear ", "success");
  };
  const handleOnChange = (event) => {
    const temp = event.target.value;

    if (temp[temp.length - 1] == " " && temp[temp.length - 2] == " ") {
      return;
    }
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text.length == 0 ? "" : text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#08375c" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          convert to uper case
        </button>
        <button className="btn btn-primary mx- my-1" onClick={handleloClick}>
          convert to lower case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleupclear}>
          clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1> Your text summary</h1>
        <p>
          {text.length == 0
            ? 0
            : text.split(" ").length}{" "}
          words and {text?.length} characters
        </p>
        <p>{0.008 * text?.split(" ").length} Require minutes to read</p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3> Preview</h3>
        <p>{text?.length > 0 ? text : "Enter somthing to see the preview "}</p>
      </div>
    </>
  );
}
