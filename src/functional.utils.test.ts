import { flatten } from "./functional.utils";

test("simple flatMap", () =>
  expect(flatten([[1, 2], [3, 5, 6], [3]])).toEqual([1, 2, 3, 5, 6, 3]));
test("flatMap empty list", () => expect(flatten([])).toEqual([]));
test("flatMap simple list", () => expect(flatten([[1, 2]])).toEqual([1, 2]));
test("flatMap deep list", () =>
  expect(flatten([[[1], 2], [4]])).toEqual([[1], 2, 4]));
