import React, { useState } from "react";



const TextForm = (props) => {
    const handleUpClick = ()=>{
        console.log("Converted into upperCase " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleonChange = (event)=>{
        setText(event.target.value)
    }
  const [text, setText] = useState("");
  return (
    <div>
      <div className="m-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleonChange} id="myBox" value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
      </div>
    </div>
  );
};

export default TextForm;
