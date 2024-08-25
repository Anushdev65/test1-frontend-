import React from "react";
import Button from "../components/Button";
import "../style/frame.css";
import Home from "../components/Home";

const Frame = () => {
  return (
    <section>
      <div className="frame-container">
        <Home />
        <div className="divider"></div>
        <Button label="Done" />
      </div>
    </section>
  );
};

export default Frame;
