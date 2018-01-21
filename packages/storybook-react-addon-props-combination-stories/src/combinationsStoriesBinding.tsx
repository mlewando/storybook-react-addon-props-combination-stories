import { Story } from "@storybook/react";
import React from "react";
import { CombinationValues } from "./ocjectCombinations";

export const withCombinations = <T, S extends Story>(
  story: S,
  combinations: (values: CombinationValues<T>) => T[]
) => (
  values: CombinationValues<T>,
  nameFunction: (props: T) => string,
  Component: React.StatelessComponent<T> | React.ComponentClass<T>
): S => {
  combinations(values).forEach(props =>
    story.add(nameFunction(props), () => <Component {...props} />)
  );
  return story;
};
