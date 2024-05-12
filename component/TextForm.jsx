import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Upper Case", "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into Lower Case", "success")
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text Successfully", "success")
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="m-3">
          <h1 style={{color: props.mode == 'light'?'black':'white'}}>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              style={{backgroundColor: props.mode == 'light'?'white':'grey',
                color: props.mode == 'light'?'black':'white'
              }}
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
      <div className="container m-3" style={{color: props.mode == 'light'?'black':'white'}}>
        <h1>Text Analysis</h1>
        <p>
          {text.split(" ").length}words and {text.length} characters
        </p>
        {/* <p>{0.008*(text.split(" ").length)}Minutes Read</p> */}
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextForm;
