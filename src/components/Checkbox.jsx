// CheckboxItem.js
import React from "react";
import "../style/checkbox.css";

const Checkbox = ({ onChange, label, id, checked }) => {
  return (
    <div className="checkbox-container">
      <label className="checkbox-label" htmlFor={id}>
        <span>{label}</span>
      </label>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          className="checkbox-input"
          onChange={onChange}
          id={id}
          checked={checked}
        />
        <span className={`custom-checkbox ${checked ? "checked" : ""}`}></span>
      </div>
    </div>
  );
};

export default Checkbox;
