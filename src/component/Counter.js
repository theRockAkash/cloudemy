import React from "react";

const Counter = ({ count }) => {
  return (
    <div>
      <h2 className="counter-num mb-0">{count ? count : 1000}+</h2>
      <p className="counter-title mb-0">Downloads!</p>
    </div>
  );
};

export default Counter;
