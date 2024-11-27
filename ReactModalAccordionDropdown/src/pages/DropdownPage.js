import React, { useState } from "react";
import Dropdown from "../components/Dropdown";

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (newOption) => {
    setSelection(newOption);
  };

  const options = [
    { label: "RED", value: "red", id: 1 },
    { label: "GREEN", value: "green", id: 2 },
    { label: "BLUE", value: "blue", id: 3 },
  ];

  return (
    <div className="flex">
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
};

export default DropdownPage;
