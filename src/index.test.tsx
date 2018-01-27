import { Story } from "@storybook/react";
import React from "react";
import * as ReactTestRenderer from "react-test-renderer";
import { addCombinations } from "./index";

test("Extends given story", () => {
  const story: Story = {
    add: jest.fn(),
    addDecorator: jest.fn(),
    kind: "test"
  };
  const extendedStory = addCombinations(story);
  expect(extendedStory).toBe(story);
  expect(extendedStory.withCombinations).toBeDefined();
});
test("Extended story is adding stories", () => {
  const addStory = jest.fn();
  const extendedStory = addCombinations({
    add: addStory,
    addDecorator: jest.fn(),
    kind: "test"
  });
  const component = jest.fn();
  component.mockReturnValue(<div>test</div>);

  extendedStory.withCombinations({ test: [1, 2] }, () => "story", component);
  addStory.mock.calls
    .map(args => args[1] as () => any)
    .forEach(storyFn => ReactTestRenderer.create(storyFn()));

  expect(component).toHaveBeenCalledTimes(2);
  expect(component).toHaveBeenCalledWith({ test: 1 }, {});
  expect(component).toHaveBeenCalledWith({ test: 2 }, {});
});
