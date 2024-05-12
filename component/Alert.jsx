import React from "react";
import { useState } from "react";

const Captalize = (text) => {
  let string = text.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Alert = (props) => {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{Captalize(props.alert.type)}:</strong> {props.alert.msg}
      </div>
    )
  );
};

export default Alert;
