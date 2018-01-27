export const flatten = <T>(data: T[][]): T[] =>
  data.reduce((arr: T[], item: T[]) => [...arr, ...item], []);
