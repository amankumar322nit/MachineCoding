import React from "react";

const Container = ({ lists, moveableLists, handelMove }) => {
  return (
    <div
      style={{
        height: "120px",
        width: "50px",
        padding: "10px",
        border: "1px solid black",
      }}
    >
      {lists.map((x) => {
        return (
          <div
            key={x}
            onClick={handelMove(x)}
            style={{
              backgroundColor: moveableLists.includes(x) ? "red" : "purple",
              margin: "5px",
            }}
            value={x}
          >
            {x}
          </div>
        );
      })}
    </div>
  );
};

export default Container;
