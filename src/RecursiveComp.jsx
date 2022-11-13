import React, { useState } from "react";

function RecursiveComp({ data }) {
  const len = data.length;
  const [showChildren, setShowChildren] = useState(Array(len).fill(false));

  const setChildrenIndex = (index) => {
    setShowChildren((prevState) => {
      var newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={item.name} style={{ paddingLeft: 25 }}>
            <span
              onClick={() => {
                if (!item.isFolder) return;
                setChildrenIndex(index);
              }}
            >
              {item.name}
            </span>

            {item.children && (
              <div style={{ display: showChildren[index] ? "block" : "none" }}>
                <RecursiveComp data={item.children} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RecursiveComp;
