import React from "react";

const Alert = (props) => {
  const capatalize = (word) => {
    if (word === "Danger") {
      word = "error";
    }
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fadeshow`}
          role="alert"
        >
          <strong>{capatalize(props.alert.type)}</strong>{props.alert.msg}
        </div>
      )}
    </div>
  );
};

export default Alert;