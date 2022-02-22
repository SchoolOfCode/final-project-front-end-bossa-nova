import React from "react";

export default function Button({ text, handleClick, className }) {
  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
