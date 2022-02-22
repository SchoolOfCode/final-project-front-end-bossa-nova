// props: type, placeholder, label, value
// behaviour: onChange
// state: none

import React from "react";

export default function TextField({
  dataType,
  placeholder,
  label,
  value,
  onChange,
  stateValue,
}) {
  return (
    <div>
      <label>{label}</label>
      <input type={dataType} onChange={onChange} value={value}></input>
    </div>
  );
}
