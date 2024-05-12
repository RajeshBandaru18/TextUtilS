import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="m-3">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              onChange={handleonChange}
              id="myBox"
              value={text}
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn mx-3 btn-primary" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn mx-1 btn-primary" onClick={handleClearClick}>
            Clear Text
          </button>
        </div>
      </div>
      <div className="container m-3">
        <h1>Text Analysis</h1>
        <p>
          {text.split(" ").length}words and {text.length} characters
        </p>
        <p>{0.008*(text.split(" ").length)}Minutes Read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
