import React, { useState } from "react";
import { Calculator } from "./components/Calculator";

import "./App.scss";

const App: React.FC = () => {
  const initialName: string = "React Calculator";
  const [name, setName] = useState<string>(initialName);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value,
      maxLength
    }: { value: string | number; maxLength: number } = event.target;
    const newName = value.toString().substring(0, maxLength);
    setName(newName);
  };

  return (
    <div className="App">
      <Calculator name={name} onNameChange={handleNameChange} />
    </div>
  );
};

export default App;
