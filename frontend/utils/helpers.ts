import { useCallback } from "react";
import throttle from "lodash.throttle";
import { localStorageNames } from "../constants";
import { IProduct } from "../types";
import { SortingMethod } from "../pages/favorites";

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
      return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : null;
    }
    if (item === localStorageNames.SHIPPING_ADDRESS) {
      return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : {};
    }
    return localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : [];
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

export const sortByAndReturnArray = (products: IProduct[], sortingMethod: SortingMethod) => {
  let data;
  switch (sortingMethod) {
    case SortingMethod.LOWEST_PRICE:
      data = products.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
      return data;
    case SortingMethod.HIGHEST_PRICE:
      data = products.sort((a, b) => (a.price < b.price ? 1 : b.price < a.price ? -1 : 0));
      return data;
    case SortingMethod.BIGGEST_DISCOUNT:
      data = products.sort((a, b) =>
        a.prevPrice - a.price < b.prevPrice - b.price ? 1 : b.prevPrice - b.price < a.prevPrice - a.price ? -1 : 0
      );
      return data;
  }
};
