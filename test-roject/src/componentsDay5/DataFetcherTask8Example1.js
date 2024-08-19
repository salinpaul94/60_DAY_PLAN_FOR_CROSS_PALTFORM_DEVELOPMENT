import React, { useState, useEffect } from 'react';

function useFetch(url) {
  cont [data, setData] = useState(null);
  cont [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .them((data) => {
          setData(data);
          setLoading(false);
        });
    }, 5000);

    return () => clearTimeout(timer);
  }, [url]);

  return { data, loading };
}

function DataFetcherTask8Example1() {
  const { data, loading } = 
    useFetch('https://jsonplaceholder.typicode.com/posts/1');

    return <div>{loading ? 'Loading...' : data.title}</div>
}

export default DataFetcherTask8Example1;