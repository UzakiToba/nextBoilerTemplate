import { useEffect, useRef } from 'react';

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (callback: any, delay: any): any => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const handler = (...args: any[]): any =>
      (savedCallback as any).current(...args);

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return (): any => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
