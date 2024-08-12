import React from 'react';

function TodoList(props) {
  const todos = props.todos;
  const listItems = todos.map((todo) =>
    <li key={todo.id}>
      {todo.text}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default TodoList;