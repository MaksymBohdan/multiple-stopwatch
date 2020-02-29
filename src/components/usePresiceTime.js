import { useEffect, useRef } from 'react';

export const usePreciseTimer = (
  handler,
  periodInMilliseconds,
  activityFlag
) => {
  const initialTime = useRef();

  useEffect(() => {
    if (activityFlag) {
      initialTime.current = new Date().getTime();

      const id = setInterval(() => {
        const currentTime = new Date().getTime();
        const delay = currentTime - initialTime.current;
        initialTime.current = currentTime;

        handler(delay / 1000);
      }, periodInMilliseconds);

      return () => {
        clearInterval(id);
      };
    }
  }, [periodInMilliseconds, activityFlag]);
};
