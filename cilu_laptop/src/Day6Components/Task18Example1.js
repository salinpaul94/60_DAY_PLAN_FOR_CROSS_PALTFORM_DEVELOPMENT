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
    console.log( 'Error: ', error, 'Info: ', errorInfo );
  }

  render() {
    if ( this.state.hasError ) {
      return <h1>Something went Wrong.</h1>
    }
    return this.props.children;
  }
}

function FaultyComponent() {
  throw new Error( 'An error occured!' );
  // return <div>Faulty Component</div>;
}

function Task18Example1() {
  return (
    <ErrorBoundary>
      <FaultyComponent/>
    </ErrorBoundary>
  );
}

export default Task18Example1;