import { flatten } from "./functional.utils";

export type CombinationValues<T> = { [K in keyof T]: Array<T[K]> };

const addKey = <T, K extends keyof T>(currentCombinations: T[], key: K) => (
  keyValue: T[K]
): T[] =>
  currentCombinations.map(combination => ({
    ...(combination as any),
    [key]: keyValue
  }));

const reduceKey = <T>(values: CombinationValues<T>) => (
  currentCombinations: T[],
  key: keyof T
): T[] => flatten(values[key].map(addKey(currentCombinations, key)));

export const combinations = <T>(values: CombinationValues<T>): T[] =>
  (Object.keys(values) as Array<keyof T>).reduce(reduceKey(values), [
    {}
  ] as T[]);
