import { Story } from "@storybook/react";
import * as React from "react";
import * as ReactTestRenderer from "react-test-renderer";
import { withCombinations } from "./combinationsStoriesBinding";

interface TestComponentProps {
  name: string;
  val: number;
}
const TestComponent = (props: TestComponentProps) => (
  <div>
    {props.name}: {props.val}
  </div>
);
test("Render all stories", () => {
  const combinator = jest.fn();
  combinator.mockReturnValue([
    { name: "first", val: 3 },
    { name: "second", val: 8 }
  ]);
  const story = {
    add: jest.fn(),
    addDecorator: jest.fn(),
    kind: "test story"
  };
  const testComponent = jest.fn();
  testComponent.mockReturnValue(<div>test</div>);

  const result = withCombinations<TestComponentProps, Story>(story, combinator)(
    {
      name: ["name1"],
      val: [2, 3]
    },
    p => `${p.name}: ${p.val}`,
    testComponent
  );

  expect(result).toBe(story);
  expect(combinator).toHaveBeenCalledWith({
    name: ["name1"],
    val: [2, 3]
  });
  expect(combinator).toHaveBeenCalledTimes(1);
  expect(story.add).toHaveBeenCalledTimes(2);
  expect(story.add).toHaveBeenCalledWith("first: 3", expect.anything());
  expect(story.add).toHaveBeenCalledWith("second: 8", expect.anything());
  story.add.mock.calls
    .map(args => args[1] as () => any)
    .forEach(storyFn => ReactTestRenderer.create(storyFn()));
  expect(testComponent).toHaveBeenCalledWith({ name: "first", val: 3 }, {});
  expect(testComponent).toHaveBeenCalledWith({ name: "second", val: 8 }, {});
});
