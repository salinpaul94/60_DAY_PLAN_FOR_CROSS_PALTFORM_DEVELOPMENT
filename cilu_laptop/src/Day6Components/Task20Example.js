import React, {
  useState,
  useCallback,
  useMemo,
  lazy,
  Suspense,
  Component
} from 'react';

// Lazy loaded components
const LazyProfile = lazy(() => import('./Task13Example1'));
const LazyDashboard = lazy(() => import('./Task10Example2'));

// Error boundary component
class ErrorBoundary extends Component {
  constructor( props ) {
    super( props );
    this.state = { hasError: false };
  }

  static getDerivedStateFromError( error ) {
    return { hasError: true };
  }

  componentDidCatch( error, errorInfo ) {
    console.log('Error Task 20: ', error, 'Info taks 20: ', errorInfo);
  }

  render() {
    if ( this.state.hasError ) {
      return <h1>Something went wrong don't know</h1>
    }
    return this.props.children;
  }
}

function Task20() {
  const [ user, setUser ] = useState({ name: '', email: '' });
  const [ count, setCount ] = useState( 0 );

  const handleInputChange = useCallback(( e ) => {
      const { name, value } = e.target;
      setUser(( prevUser ) => ({ ...prevUser, [ name ]: value }));
    }, []);

    const memoizedUser = useMemo(() => user, [ user ]);

    return (
      <div>
        <h1>Complex Project</h1>
        <from>
          <label>
            Name:
            <input
              type='text'
              name='name'
              value={ user.name }
              onChange={ handleInputChange }
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={ user.email }
              onChange={ handleInputChange }
            />
          </label>
        </from>
        <p>User: { JSON.stringify( memoizedUser )}</p>
        <button onClick={() => setCount( count + 1 )}>Increment</button>
        <p>Count: { count }</p>
        <ErrorBoundary>
          <Suspense fallback={ <div>Loading Profile...</div>}>
            <LazyProfile/>
          </Suspense>
          <Suspense fallback={ <div>Loading Dashboard...</div> }>
            <LazyDashboard/>
          </Suspense>
        </ErrorBoundary>
      </div>
    );
}

export default Task20;