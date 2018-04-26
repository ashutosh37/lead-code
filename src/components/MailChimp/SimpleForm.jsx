import React from "react";
import {Constants} from '../Constants'


// a basic form
const SimpleForm = ({ status, message, className, style, onSubmitted }) => {
  let input;
  const submit = () =>
    input &&
    input.value.indexOf("@") > -1 &&
    onSubmitted({
      EMAIL: input.value
    });

  return (
    <div className={className} style={style}>
      <h1>{Constants.modalheading}</h1>
      <hr/>
      <p>{Constants.modalsubheading}</p>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && <div style={{ color: "red" }}>You are already subscribed!</div>}
      {status === "success" && <div style={{ color: "green" }}>{message}</div>}
      <input ref={node => (input = node)} type="email" placeholder="Your email" />
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default SimpleForm;