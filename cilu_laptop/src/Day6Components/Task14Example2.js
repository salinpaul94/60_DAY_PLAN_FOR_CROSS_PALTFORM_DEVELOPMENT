import React, { useState, useCallback, useMemo } from 'react';

function NumberList({ numbers, onNumberClick }) {
  return (
    <ul>
      { numbers.map(( number ) => (
        <li
          key={ number }
          onClick={() => onNumberClick( number )}
          style={{ cursor: 'pointer' }}
          >
          { number }
        </li>
      ))}
    </ul>
  );
}

function Task14Example2() {
  const [ numbers, setNumbers ] = useState([ 1, 2, 3, 4, 5 ]);
  const [ selectedNumber, setSelectedNumber ] = useState( null );

  const handleNumberClick = useCallback(( number ) => {
    setSelectedNumber(number);
  }, []);

  const memorizedNumbers = useMemo(() => numbers, [ numbers ]);

  return (
    <div>
      <NumberList numbers={ memorizedNumbers } onNumberClick={ handleNumberClick }/>
      <p>Selected Number: { selectedNumber }</p>
    </div>
  );
}

export default Task14Example2;