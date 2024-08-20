import React from 'react';

function withTimestamp(WrappedComponent) {
  return function Timestamp(props) {
    return (
      <div>
        <p>Rendered at: {new Date().toLocaleTimeString()}</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

function Message(props) {
  return <p>{props.text}</p>;
}

const MessageWithTimestamp = withTimestamp(Message);

function AppHOCTask13Example1() {
  return <MessageWithTimestamp text="Hello, world!" />;
}

export default AppHOCTask13Example1;