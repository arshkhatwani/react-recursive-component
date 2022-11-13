import React, { useState } from "react";

function RecursiveComp({ data }) {
  const [showChildren, setShowChildren] = useState(-1);

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={item.name} style={{ paddingLeft: 25 }}>
            <span
              onClick={() => {
                if (!item.isFolder) return;
                setShowChildren((prev) => (prev == index ? -1 : index));
              }}
            >
              {item.name}
            </span>

            {showChildren == index && item.children && (
              <RecursiveComp data={item.children} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RecursiveComp;
