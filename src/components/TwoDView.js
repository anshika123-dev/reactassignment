import React from "react";

const scale = 0.05; // 1 mm = 0.05 px

const TwoDView = ({ products }) => {
  const containerLength = 6000; // mm
  const containerWidth = 2400;  // mm

  const containerWidthPx = containerLength * scale;
  const containerHeightPx = containerWidth * scale;

  let currentX = 0;
  let currentY = 0;
  let rowHeight = 0;

  const layout = [];

  for (let i = 0; i < products.length; i++) {
    const prod = products[i];
    const boxLength = prod.length * scale; // x-axis
    const boxWidth = prod.width * scale;   // y-axis

    // If box doesn't fit in current row, move to next row
    if (currentX + boxLength > containerWidthPx) {
      currentX = 0;
      currentY += rowHeight + 5;
      rowHeight = 0;
    }

    // Prevent overflow from container height
    if (currentY + boxWidth > containerHeightPx) break;

    layout.push({
      ...prod,
      style: {
        position: "absolute",
        left: currentX,
        top: currentY,
        width: boxLength,
        height: boxWidth,
        backgroundColor: prod.color,
        border: "1px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "10px",
        color: "#fff",
      },
    });

    currentX += boxLength + 5;
    rowHeight = Math.max(rowHeight, boxWidth);
  }

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc" }}>
      <h6 className="mb-2">2D Container Box View</h6>
      <div
        style={{
          position: "relative",
          width: containerWidthPx,
          height: containerHeightPx,
          border: "3px solid #333",
          backgroundColor: "#f1f1f1",
        }}
      >
        {layout.map((prod, index) => (
          <div key={index} style={prod.style} title={prod.name}>
            {prod.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TwoDView;
