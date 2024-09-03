import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./Task15Exampl1'));

function Task16Example1() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={ <div>Loading...</div> }>
        <LazyComponent/>
      </Suspense>
    </div>
  );
}

export default Task16Example1;