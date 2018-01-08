import { combinations } from "./ocjectCombinations";

interface TestObject {
  propA: number;
  propB: boolean;
  propC: string;
}

test("Calculate combinations", () => {
  expect(
    combinations<TestObject>({
      propA: [3, 5],
      propB: [true, false],
      propC: ["testA", "testB", "testC"]
    })
  ).toEqual([
    { propA: 3, propB: true, propC: "testA" },
    { propA: 5, propB: true, propC: "testA" },
    { propA: 3, propB: false, propC: "testA" },
    { propA: 5, propB: false, propC: "testA" },
    { propA: 3, propB: true, propC: "testB" },
    { propA: 5, propB: true, propC: "testB" },
    { propA: 3, propB: false, propC: "testB" },
    { propA: 5, propB: false, propC: "testB" },
    { propA: 3, propB: true, propC: "testC" },
    { propA: 5, propB: true, propC: "testC" },
    { propA: 3, propB: false, propC: "testC" },
    { propA: 5, propB: false, propC: "testC" }
  ]);
});
