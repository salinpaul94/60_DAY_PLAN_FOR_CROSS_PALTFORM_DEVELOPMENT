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
    console.log( 'Error task 19: ', error, 'Info task 19: ', errorInfo );
  }

  render() {
    if ( this.state.hasError ) {
      return <h1>Something went wrong!!</h1>;
    }
    return this.props.children;
  }
}

function FaultyComponent() {
  throw new Error( 'Ann error occured!' );
  // return <div>Faulty Component</div>
}

function Task19Example1() {
  return (
    <ErrorBoundary>
      <FaultyComponent/>
    </ErrorBoundary>
  );
}

export default Task19Example1;