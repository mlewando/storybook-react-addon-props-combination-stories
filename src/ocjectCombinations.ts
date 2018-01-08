function flatten<T>(data: T[][]): T[] {
  return data.reduce((arr: T[], item: T[]) => [...arr, ...item]);
}
function pipe<I1, I2, O1, O2>(
  fn1: (a: I1, b: I2) => O1,
  fn2: (a: O1) => O2
): (a: I1, b: I2) => O2 {
  return (a: I1, b: I2) => fn2(fn1(a, b));
}

export type CombinationValues<T> = { [K in keyof T]: T[K][] };

function addKey<T, K extends keyof T>(
  key: K,
  keyValue: T[K],
  combinations: T[]
): T[] {
  return combinations.map((combination: T): T =>
    Object.assign({}, combination, { [key]: keyValue })
  );
}

const reduceKey = <T>(values: CombinationValues<T>) => (
  combinations: T[],
  key: keyof T
): T[][] => values[key].map(keyValue => addKey(key, keyValue, combinations));

export const combinations = <T>(values: CombinationValues<T>): T[] => {
  return Object.keys(values).reduce(pipe(reduceKey(values), flatten), [
    {}
  ] as T[]);
};
