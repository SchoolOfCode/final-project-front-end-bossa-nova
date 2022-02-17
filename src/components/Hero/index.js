import React, { useState } from "react";
import PreviewTable from "../FormComponents/PreviewTable";
import CreateForm from "../FormComponents/CreateForm";

function Hero() {
  const [buttonAddNew, setButtonAddNew] = useState(false);

  return (
    <main className="Hero">
      <button onClick={() => setButtonAddNew(true)}>Add New</button>
      <CreateForm trigger={buttonAddNew} setTrigger={setButtonAddNew}>
        <p>my popup</p>
      </CreateForm>
      <PreviewTable />
    </main>
  );
}

export default Hero;
