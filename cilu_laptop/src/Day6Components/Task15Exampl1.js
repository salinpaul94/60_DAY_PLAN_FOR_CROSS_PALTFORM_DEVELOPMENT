import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./Task14Example1'));

function Task15Example1() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={ <div>Loading...</div>}>
      <LazyComponent/>
      </Suspense>
    </div>
  );
}

export default Task15Example1;