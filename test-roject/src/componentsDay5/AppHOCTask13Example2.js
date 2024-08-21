import React from "react";

function withErrorBoundary(WrappedComponent){
  return class ErrorBoundary extends React.Component {
    state = { hasError: false};

    static getDerivedStateFromError() {
      return { hasError: true };
    }

    componentDidCatch(error, info) {
      console.log('Error: ', error, 'Info: ', info);
    }

    render() {
      if (this.state.hasError) {
        return <p>Something went wrong.</p>
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}

function FaultyComponent() {
  // throw new Error('An error occurred!');
}

const FaultyComponentWithErrorBoundary = withErrorBoundary(FaultyComponent);

function AppHOCTask13Example2() {
  return <FaultyComponentWithErrorBoundary />;
}

export default AppHOCTask13Example2;
