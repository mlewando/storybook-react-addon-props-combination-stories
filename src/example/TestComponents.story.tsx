import { storiesOf } from "@storybook/react";
import * as React from "react";
import { combinations } from "../ocjectCombinations";
import { TestComponent, TestComponentProps } from "./TestComponents";

const story = storiesOf("Test component", module).add("Default state", () => (
  <TestComponent name="sdf" count={3} />
));

combinations<TestComponentProps>({
  count: [2, 3, 4],
  name: ["Mateusz", "Anka"]
}).forEach(props =>
  story.add(`${props.name}: ${props.count}`, () => <TestComponent {...props} />)
);
