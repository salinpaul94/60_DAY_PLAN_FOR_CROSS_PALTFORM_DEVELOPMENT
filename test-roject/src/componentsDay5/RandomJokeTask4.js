import React, { useState, useEffect } from 'react';

function RandomJokeTask4() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((data) => setJoke(data.setup + ' - ' + data.punchline));
  }, []);

  return <div>{joke}</div>;
}

export default RandomJokeTask4;