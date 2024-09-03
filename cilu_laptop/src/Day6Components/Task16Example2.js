import React, { Suspense } from 'react';

const LazyPage = React.lazy(() => import('./Task15Example2'));

function Task16Example2() {
  return (
    <div>
      <h1>My Application</h1>
      <Suspense fallback={ <div>Loading page...</div>}>
        <LazyPage />
      </Suspense>
    </div>
  );
}

export default Task16Example2;