import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor( props ) {
    super( props );
    this.state = { hasError: false };
  }

  static getDerivedStateFromError( error ) {
    return { hasError: true };
  }

  componentDidCatch( error, errorInfo ) {
    console.log( 'Error task 19 example 2', error, 'Info task 19 example 2: ', errorInfo );
  }

  render() {
    if ( this.state.hasError ) {
      return <h1>Something went wrong!!!</h1>;
    }
    return this.props.children;
  }
}

function SafeComponent() {
  return <div>Safest Component</div>;
}

function FaultyComponent() {
  throw new Error( 'An error seems to have occured!' );
  // return <div>Faulty Component</div>;
}

function Task19Example2() {
  return (
    <ErrorBoundary>
      <SafeComponent/>
      <FaultyComponent/>
    </ErrorBoundary>
  );
}

export default Task19Example2;