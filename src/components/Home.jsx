import React, { useState } from "react";
import "../style/home.css";
import Checkbox from "./Checkbox";

const Home = () => {
  const pages = ["All pages", "Page 1", "Page 2", "Page 3", "Page 4"];

  //State to check all the buttons when the all pages is clicked
  const [checkedItems, setCheckedItems] = useState({
    "All pages": false,
    "Page 1": false,
    "Page 2": false,
    "Page 3": false,
    "Page 4": false,
  });

  // Function that handles the checkbox state changes
  const handleCheckboxChange = (label) => {
    if (label === "All pages") {
      const newCheckedState = !checkedItems["All pages"];
      const updatedItems = {};
      pages.forEach((page) => {
        updatedItems[page] = newCheckedState;
      });
      setCheckedItems(updatedItems);
    } else {
      // For individual pages, toggle their checked state
      const updatedItems = {
        ...checkedItems,
        [label]: !checkedItems[label],
      };

      // If any page is unchecked, making sure "All pages" is also unchecked
      const areAllChecked =
        label !== "All pages" &&
        Object.keys(updatedItems).every(
          (key) => key === "All pages" || updatedItems[key]
        );

      updatedItems["All pages"] = areAllChecked;

      setCheckedItems(updatedItems);
    }
  };
  return (
    <div className="home-container">
      {pages.map((page, index) => (
        <div key={index} onClick={() => handleCheckboxChange(page)}>
          <Checkbox
            id={`checkbox-${index}`}
            label={page}
            onChange={() => handleCheckboxChange(page)}
            checked={!!checkedItems[page]}
          />
          {index === 0 && <div className="divider"></div>}{" "}
        </div>
      ))}
    </div>
  );
};

export default Home;
