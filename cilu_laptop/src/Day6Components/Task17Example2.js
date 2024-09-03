import React, { Suspense } from 'react';

const LazyImage = React.lazy(() => import('./Task10Example1'));

function Task17Example2() {
  return (
    <div>
      <h1>Image Gallery</h1>
      <Suspense fallback={ <div>Loading image...</div> }>
        <LazyImage/>
      </Suspense>
    </div>
  );
}

export default Task17Example2;