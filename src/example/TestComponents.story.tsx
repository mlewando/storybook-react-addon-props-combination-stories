import { storiesOf, Story } from "@storybook/react";
import * as React from "react";
import { combinations, CombinationValues } from "../ocjectCombinations";
import { TestComponent, TestComponentProps } from "./TestComponents";

function combinationStory<P>(
  values: CombinationValues<P>,
  name: (props: P) => string,
  Component: React.StatelessComponent<P> | React.ComponentClass<P>
): (story: Story) => void {
  return (story: Story) =>
    combinations(values).forEach(props =>
      story.add(name(props), () => <Component {...props} />)
    );
}

const testStory = storiesOf("Test component", module).add(
  "Default state",
  () => <TestComponent name="sdf" count={3} />
);
combinationStory(
  {
    count: [2, 3, 4],
    name: ["Mateusz", "Anka"]
  },
  props => `${props.name}: ${props.count}`,
  TestComponent
)(testStory);
