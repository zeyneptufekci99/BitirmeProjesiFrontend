import "./DropdownComponent.style.css";
import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const DropdownComponent = ({
  selectedOption = (option) => {},
  label,
  options,
  defaultOption,
}) => {
  return (
    <div className="dropdownBase">
      <label>
        <span className="label">{label}</span>
      </label>
      <Dropdown
        options={options}
        onChange={(option) => selectedOption(option)}
        value={defaultOption}
        placeholder="Select an option"
      />
    </div>
  );
};

export default DropdownComponent;
