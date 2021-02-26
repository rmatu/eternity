import { useCallback } from "react";
import throttle from "lodash.throttle";

export function useThrottle(callback, delay) {
  const debouncedFn = useCallback(
    throttle((...args) => callback(...args), delay),
    [delay]
  );
  return debouncedFn;
}
