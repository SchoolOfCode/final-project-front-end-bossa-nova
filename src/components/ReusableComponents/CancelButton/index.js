import React from "react";

function CancelButton(props) {
  return <button onClick={() => props.setTrigger(false)}>cancel</button>;
}

export default CancelButton;
