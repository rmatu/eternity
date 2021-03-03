import { useCallback } from "react";
import throttle from "lodash.throttle";

export const useThrottle = (callback, delay) => {
  const debouncedFn = useCallback(
    throttle((...args) => callback(...args), delay),
    [delay] // will recreate if delay changes
  );
  return debouncedFn;
};

export const getLocalStorage = (item) => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem(item)
      ? JSON.parse(localStorage.getItem(item))
      : [];
  } else {
    return [];
  }
};
