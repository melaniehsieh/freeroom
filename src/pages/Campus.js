import React from "react";

const Campus = () => {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div>
      <h3 className="title">1 Select Campus</h3>
      <div className="option">
        <h3 onClick={handleClick}>SHA TIN WAI</h3>
        <h3 onClick={handleClick}>TAI WAI</h3>
      </div>
    </div>
  );
};

export default Campus;
