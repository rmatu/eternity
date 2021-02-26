import { useCallback } from "react";
import throttle from "lodash.throttle";

<<<<<<< HEAD
export function useThrottle(callback, delay) {
  const debouncedFn = useCallback(
    throttle((...args) => callback(...args), delay),
    [delay]
  );
  return debouncedFn;
}
=======
export const useThrottle = (callback, delay) => {
  const debouncedFn = useCallback(
    throttle((...args) => callback(...args), delay),
    [delay] // will recreate if delay changes
  );
  return debouncedFn;
};
>>>>>>> feature/3-description-screen
