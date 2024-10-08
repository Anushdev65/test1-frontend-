import React from "react";
import "../style/button.css";

//Reuseable button component
const Button = ({ label, onClick }) => {
  return (
    <button className="button" onlick={onClick}>
      <span className="button-label">{label}</span>
    </button>
  );
};

export default Button;
