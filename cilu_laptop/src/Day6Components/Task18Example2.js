import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor( props ) {
    super( props );
    this.state = { hasError: false }
  }

  static getDerivedStateFromError( error ) {
    return { hasError: true };
  }

  componentDidCatch( error, errorInfo ) {
    console.log('Error has occured: ', error, 'Find Error Info: ', errorInfo);
  }

  render() {
    if ( this.state.hasError ) {
      return <h1>Something is up</h1>;
    }
    return this.props.children;
  }
}

function FaultyComponent() {
  throw new Error( 'An error occured!' );
  // return <div>Faulty Component</div>;
}

function SafeComponent() {
  return <div>Safe Component</div>;
}

function Task18Example2() {
  return (
    <ErrorBoundary>
      <SafeComponent />
      <FaultyComponent/>
    </ErrorBoundary>
  );
}

export default Task18Example2;