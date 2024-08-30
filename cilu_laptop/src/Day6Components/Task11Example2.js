import React, { useState } from 'react';

const List = React.memo(({ items}) => {
  console.log('List rendered');
  return (
    <ul>
      {items.map(( item, index) => (
        // return (
        <li key={index}>{item}</li>
        // );
      ))}
    </ul>
  );
});

function AppTask11Example2() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <List items={items}/>
    </div>
  );
}

export default AppTask11Example2;