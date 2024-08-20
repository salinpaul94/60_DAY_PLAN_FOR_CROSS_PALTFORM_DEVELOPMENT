import React from 'react';

function withLogger(WrappedComponent) {
  return function Logger(props) {
    console.log('Rendered with props: ', props);
    return <WrappedComponent {...props} />;
  };
}

function Button(props) {
  return <button>{props.label}</button>
}

const ButtonWithLogger = withLogger(Button);

function AppHOCTask12Example1() {
  return <ButtonWithLogger label="Click Me" />;
}

export default AppHOCTask12Example1;