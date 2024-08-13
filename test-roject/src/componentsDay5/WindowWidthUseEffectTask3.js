import React, { useState, useEffect } from 'react';

function WindowWidthUseEffectTask3() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>Window width: {width}</div>;
}

export default WindowWidthUseEffectTask3;