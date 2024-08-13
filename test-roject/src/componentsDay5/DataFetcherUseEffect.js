import React, { useState, useEffect } from 'react';

function DataFetcherUseEffect() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => setData(data));
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {data ? <p>{data.title}</p> : <p>Loading...</p>}
    </div>
  );
}

export default DataFetcherUseEffect;