import React, { Suspense } from 'react';

const LazyImage = React.lazy(() => import('./Task14Example2'));

function Task15Example2() {
  return (
    <div>
      <h1>Image Gallery</h1>
      <Suspense fallback={<div>Loading image...</div>}>
        <LazyImage/>
      </Suspense>
    </div>
  );
}

export default Task15Example2;