import React from "react";
import { useState } from "react";

export const Folder = ({ folder }) => {
  const [isExpand, SetIsExpand] = useState(false);
  return (
    <div>
      <>
        {folder.isFolder ? (
          <button
            onClick={() => SetIsExpand(!isExpand)}
            style={{
              transform: isExpand ? "rotate(90deg)" : null,
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
            }}
          >
            {">"}
          </button>
        ) : null}
      </>
      {folder.name}
      {folder.isFolder &&
        isExpand &&
        folder.children.map((fol) => {
          return (
            <div style={{ paddingLeft: "60px" }}>
              <Folder folder={fol} key={fol.name} />
            </div>
          );
        })}
    </div>
  );
};
