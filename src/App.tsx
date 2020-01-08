import React, { useState } from "react";
import { Calculator } from "./components/Calculator";
import { Requirements } from "./components/Requirements";
import "./App.scss";

const App: React.FC = () => {
  const [name, setValue] = useState("Change me!");

  const nameChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  return (
    <div className="cont">
      <Calculator calcName={name} />
      <Requirements name={name} onNameChange={nameChangeHandler} />
    </div>
  );
};

export default App;
