import React from "react";
import PreviewTable from "../FormComponents/PreviewTable";

// this will probably be better created via react rather than hardcoded

function Hero() {
  return (
    <div className="Hero">
      <button>Add New</button>
      <PreviewTable />
    </div>
  );
}

export default Hero;
