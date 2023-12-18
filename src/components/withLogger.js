import React, { useEffect } from 'react';

// HOC - Logger
const withLogger = (WrappedComponent) => {
  return function WithLoggerComponent(props) {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} mounted.`);
      // Clean-up function if needed
      return () => {
        console.log(`Component ${WrappedComponent.displayName || WrappedComponent.name} unmounted.`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
