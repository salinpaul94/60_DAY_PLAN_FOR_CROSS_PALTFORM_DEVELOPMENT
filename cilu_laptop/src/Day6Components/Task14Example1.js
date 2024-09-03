import React, { useState, useCallback, useMemo } from 'react';

function ItemList({ items, onItemClick }) {
  return (
    <ul>
      { items.map(( item ) => (
        <li key={ item } onClick={() => onItemClick( item )}>
          { item }
        </li>
      ))}
    </ul>
  );
}

function Task14Example1() {
  const [ items, setItems ] = useState([ 'Apple', 'Banana', 'Orange' ]);
  const [ selectedItem, setSelectedItem ] = useState('');

  const handleItemClick = useCallback(( item ) => {
    setSelectedItem( item );
  }, []);

  const memoizedItems = useMemo(() => items, [ items ]);

  return (
    <div>
      <ItemList items={ memoizedItems } onItemClick={ handleItemClick } />
      <p>Selected Item: { selectedItem }</p>
    </div>
  );
}

export default Task14Example1;