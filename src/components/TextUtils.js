import React, { useState } from "react";

function TextUtils(props) {
  const [textvalue, setTextvalue] = useState("Type here");

  function ChangeText(event) {
    setTextvalue(event.target.value);
  }

  function ChangeToUpper() {
    // let mytext=textvalue.toUpperCase()
    // setTextvalue(mytext)
    setTextvalue(textvalue.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  }

  function ChangeToLower() {
    // let mytext=textvalue.toUpperCase()
    // setTextvalue(mytext)
    setTextvalue(textvalue.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  }
  return (
    <>
      <div className="container">
        <h1>Enter Text Below</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={textvalue}
            onChange={ChangeText}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={ChangeToUpper}>
          UpperCase
        </button>
        <button className="btn btn-primary  mx-2" onClick={ChangeToLower}>
          UpperCase
        </button>
      </div>
      <div className="container my-4">
        <h1> Your Text Summary </h1>
        <p>
          {textvalue.split(" ").length} words and {textvalue.length} characters{" "}
        </p>
        <h2>Preview</h2>
        <p>{textvalue}</p>
      </div>
    </>
  );
}

export default TextUtils;
