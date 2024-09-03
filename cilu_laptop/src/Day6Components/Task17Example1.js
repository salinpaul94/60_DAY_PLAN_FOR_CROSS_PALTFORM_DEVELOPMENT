import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./Task13Example2'));

function Task17Example1() {
  return (
    <div>
      <h1>My application</h1>
      <Suspense fallback={ <div>Loading...</div> }>
        <LazyComponent/>
      </Suspense>
    </div>
  );
}

export default Task17Example1;