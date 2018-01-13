import { storiesOf } from "@storybook/react";
import * as React from "react";
import { TestComponent } from "./TestComponents";

storiesOf("Test component", module).add("Default state", () => (
  <TestComponent />
));
