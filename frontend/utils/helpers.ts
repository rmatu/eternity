import { useCallback } from "react";
import throttle from "lodash.throttle";
import { localStorageNames } from "../constants";

export const useThrottle = (callback, delay) => {
  const debouncedFn = useCallback(
    throttle((...args) => callback(...args), delay),
    [delay] // will recreate if delay changes
  );
  return debouncedFn;
};

export const getLocalStorage = (item) => {
  if (typeof localStorage !== "undefined") {
    if (item === localStorageNames.USER_INFO) {
      return localStorage.getItem(item)
        ? JSON.parse(localStorage.getItem(item))
        : null;
    }
    return localStorage.getItem(item)
      ? JSON.parse(localStorage.getItem(item))
      : [];
  } else {
    return [];
  }
};

export const vhToPixels = (vh: number) => {
  return Math.round(window.innerHeight / (100 / vh));
};

export const mergeTwoArraysOfObject = (arr1, arr2) => {
  let result = [];
  arr1.forEach(function (o) {
    arr2.forEach(function (c) {
      if (o._id === c.productId) result.push(Object.assign({}, o, c));
    });
  });

  return result;
};
