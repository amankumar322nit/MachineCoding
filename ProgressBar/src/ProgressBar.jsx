import React from "react";

const ProgressBar = ({ progrss, color }) => {
  const style = {
    width: `${progrss}%`,
    backgroundColor: color,
    borderRadius: "40px",
    color: "black",
  };
  return (
    <div
      style={{
        width: "290px",
        height: "20px",
        color: "grey",
        borderRadius: "50px",
      }}
    >
      <div style={style}>{progrss}%</div>
    </div>
  );
};

export default ProgressBar;
