import { combinations } from "./ocjectCombinations";

test("Calculate combinations", () => {
  const result = combinations({
    propA: [3, 5],
    propB: [true, false],
    propC: ["testA", "testB", "testC"]
  });

  expect(result).toContainEqual({ propA: 3, propB: true, propC: "testA" });
  expect(result).toContainEqual({ propA: 5, propB: true, propC: "testA" });
  expect(result).toContainEqual({ propA: 3, propB: false, propC: "testA" });
  expect(result).toContainEqual({ propA: 5, propB: false, propC: "testA" });
  expect(result).toContainEqual({ propA: 3, propB: true, propC: "testB" });
  expect(result).toContainEqual({ propA: 5, propB: true, propC: "testB" });
  expect(result).toContainEqual({ propA: 3, propB: false, propC: "testB" });
  expect(result).toContainEqual({ propA: 5, propB: false, propC: "testB" });
  expect(result).toContainEqual({ propA: 3, propB: true, propC: "testC" });
  expect(result).toContainEqual({ propA: 5, propB: true, propC: "testC" });
  expect(result).toContainEqual({ propA: 3, propB: false, propC: "testC" });
  expect(result).toContainEqual({ propA: 5, propB: false, propC: "testC" });
});

test("Calculate simple combinations", () => {
  const result = combinations({ a: [1], b: [1, 2] });

  expect(result).toContainEqual({ a: 1, b: 1 });
  expect(result).toContainEqual({ a: 1, b: 2 });
});

test("Calculate combinations with empty params", () => {
  const result = combinations({ a: [1, 2], b: [] });

  expect(result).toEqual([]);
});

test("Calculate combinations with empty object", () => {
  const result = combinations({});

  expect(result).toEqual([{}]);
});
