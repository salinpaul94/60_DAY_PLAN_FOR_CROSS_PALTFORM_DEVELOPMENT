import React, { useState, useEffect } from 'react';

function MouseTrackerTask4() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      Mouse position: {position.x}, {position.y}
    </div>
  );
}

export default MouseTrackerTask4;