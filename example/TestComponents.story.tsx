import { storiesOf } from "@storybook/react";
import * as React from "react";
import { addCombinations } from "../src";
import { TestComponent, TestComponentProps } from "./TestComponents";

addCombinations(storiesOf("Test component", module))
  .add("Some simple example", () => <TestComponent count={3} name="23" />)
  .withCombinations(
    {
      count: [2, 3, 4],
      name: ["Anka", "Mateusz"]
    },
    props => `${props.name}: ${props.count}`,
    TestComponent
  );
