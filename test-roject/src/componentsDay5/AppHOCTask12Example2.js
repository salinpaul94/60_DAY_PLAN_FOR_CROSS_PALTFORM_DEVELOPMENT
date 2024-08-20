import React from "react";

function withAuthorization(WrappedComponent) {
  return function Authorization(props) {
    if (!props.isAuthorized) {
      return <p>You are not authorized to view this context.</p>
    }
    return <WrappedComponent {...props} />;
  };
}

function SecretContent(props) {
  return <div>Top Secret Information</div>;
}

const SecretContentWithAuthorization = withAuthorization(SecretContent);

function AppHOCTask12Example2() {
  return <SecretContentWithAuthorization isAuthorized={true} />;
}

export default AppHOCTask12Example2;