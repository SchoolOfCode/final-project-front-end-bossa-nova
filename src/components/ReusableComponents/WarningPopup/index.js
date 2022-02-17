import React from "react";

// this needs working out, as if added to the cancel button as it, it would create a loop constantly triggering the warning

function WarningPopup(props) {
  return props.trigger ? (
    <div>
      <h3>CANCEL UPDATE</h3>
      <p>Are you sure, data has been add and this will be lost...</p>
      <button onClick={() => props.setTrigger(false)}>save</button>
      <CancelButton />
    </div>
  ) : (
    ""
  );
}

export default WarningPopup;
