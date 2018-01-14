import { storiesOf as baseStoriesOf, Story } from "@storybook/react";
import { withCombinations } from "./combinationsStoriesBinding";
import { combinations, CombinationValues } from "./ocjectCombinations";

export interface ExtendedStory extends Story {
  withCombinations<T>(
    values: CombinationValues<T>,
    name: (props: T) => string,
    component: React.StatelessComponent<T> | React.ComponentClass<T>
  ): this;
}

export function storiesOf(name: string, module: NodeModule): ExtendedStory {
  const story: ExtendedStory = baseStoriesOf(name, module) as ExtendedStory;
  story.withCombinations = withCombinations(story, combinations);
  return story;
}
