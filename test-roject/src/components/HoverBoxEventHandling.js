import React, { useState } from "react";

function HoverBox() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter = {() => setIsHovered(true)}
      onMouseLeave = {() => setIsHovered(false)}
      style={{
        width: '300px',
        height: '50px',
        backgroundColor: isHovered ? 'blue' : 'gray',
      }}
    >
      Hover over me
    </div>
  );
}

export default HoverBox;