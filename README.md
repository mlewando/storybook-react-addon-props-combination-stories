# Stories generator for [React Storybook](https://github.com/storybooks/react-storybook)

[![npm][npm-version-svg]][npm]
[![npm][npm-downloads-svg]][npm]
[![Build Status][build-svg]][build]
[![codecov][coveradge-svg]][coveradge]
[![Dependency Status][deps-svg]][deps]
[![devDependency Status][dev-deps-svg]][dev-deps]

[![NPM][npm-stats-png]][npm]

[license-svg]: https://img.shields.io/github/license/mlewando/storybook-react-addon-props-combination-stories.svg
[license]: https://github.com/mlewando/storybook-react-addon-props-combination-stories/blob/master/LICENSE
[build-svg]: https://img.shields.io/travis/mlewando/storybook-react-addon-props-combination-stories.svg
[build]: https://travis-ci.org/mlewando/storybook-react-addon-props-combination-stories
[npm-version-svg]: https://img.shields.io/npm/v/storybook-react-addon-props-combination-stories.svg
[npm]: https://badge.fury.io/js/storybook-react-addon-props-combination-stories
[coveradge-svg]: https://img.shields.io/codecov/c/github/mlewando/storybook-react-addon-props-combination-stories.svg
[coveradge]: https://codecov.io/gh/mlewando/storybook-react-addon-props-combination-stories
[deps-svg]: https://img.shields.io/david/mlewando/storybook-react-addon-props-combination-stories.svg
[deps]: https://david-dm.org/mlewando/storybook-react-addon-props-combination-stories
[dev-deps-svg]: https://img.shields.io/david/dev/mlewando/storybook-react-addon-props-combination-stories.svg
[dev-deps]: https://david-dm.org/mlewando/storybook-react-addon-props-combination-stories?type=dev
[npm-downloads-svg]: https://img.shields.io/npm/dm/storybook-react-addon-props-combination-stories.svg
[npm-stats-png]: https://nodei.co/npm/storybook-react-addon-props-combination-stories.png

> Props Combinations addon for React Storybook that generates stories for each props combination

Given possible values for each prop, the addon renders your component with all combinations of prop values.
Useful for finding edge cases or just seeing all component states.
It creates a new story in your stories for each props combination.

This addon is inspired by [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations). It differs from the [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations) in the way how each combination is rendered:

* [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations) - renders each combination in **one story**
* storybook-react-addon-props-combination-stories - renders each combination as a **separate story**.

I created this addon, as the approach of putting each combination into one story was not a good fit for my project. The base idea is the same, in my opinion, the [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations) is a good addon for small components, when you can see all the combinations on one screen and check if everything is as expected. This addon is better for more "top level components", when you want to see each variation of eg. one page of your application.

A one more small thing compared to [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations) is that this package is shipped with typings (so you can use TypeScript in your stories without any additional configuration) and bundled in both CJS and ES6 modules.

## Installing / Getting started

```shell
npm install storybook-react-addon-props-combination-stories
```

Usage:

```js
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { addCombinations } from "storybook-react-addon-props-combination-stories";
import { YourComponent } from "./somewhere";

addCombinations(storiesOf("BasicUsage", module)).withCombinations(
  // An object with the shape
  // {propName: arrayOfPossiblevalues}
  {
    enabled: [true, false],
    someProp: ["one value", "and the other"],
    someAction: [action("some action")]
  },
  // Function that will render story description based on current props
  props => `${props.enabled ? "Enabled" : "Disabled"}: ${props.someProp}`,
  // Component that will be renderd
  YourComponent
);
```

## API

There is only one function exported from this package: `addCombinations(Story)`. It adds new method to your story:

`withCombinations(combinations, descriptionRenderer, component)`

* combinations - an object with array of possible values for all properties needed by your component
* descriptionRenderer - a function that returns a description of the story based on one props combination
* component - component that will be rendered inside each story

## How it's working

The addon creates story for each props combination derived from combinations object. For example, this basic usage:

```js
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { addCombinations } from "storybook-react-addon-props-combination-stories";
import { YourComponent } from "./somewhere";

addCombinations(storiesOf("BasicUsage", module)).withCombinations(
  // An object with the shape
  // {propName: arrayOfPossiblevalues}
  {
    enabled: [true, false],
    someProp: ["one value", "the other value"],
    someAction: [action("some action")]
  },
  // Function that will render story description based on current props
  props => `${props.enabled ? "Enabled" : "Disabled"}: ${props.someProp}`,
  // Component that will be renderd
  YourComponent
);
```

Is the same as writing:

```jsx
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { YourComponent } from "./somewhere";

storiesOf("BasicUsage", module)
  .add("Enabled: one value", () => (
    <YourComponent
      enabled={true}
      someProp="one value"
      someAction={action("some action")}
    />
  ))
  .add("Enabled: the other value", () => (
    <YourComponent
      enabled={true}
      someProp="the other value"
      someAction={action("some action")}
    />
  ))
  .add("Disabled: one value", () => (
    <YourComponent
      enabled={false}
      someProp="one value"
      someAction={action("some action")}
    />
  ))
  .add("Disabled: the other value", () => (
    <YourComponent
      enabled={false}
      someProp="the other value"
      someAction={action("some action")}
    />
  ));
```

## Developing

### Built With

Bundled with [Rollup](https://rollupjs.org/) from [Typescript](https://www.typescriptlang.org/). Tested with [Jest](https://facebook.github.io/jest/). Kept clean with [TSLint](https://palantir.github.io/tslint/) and [Prettier](https://prettier.io/) :)

### Setting up Dev

```shell
git clone https://github.com/mlewando/storybook-react-addon-props-combination-stories.git
cd storybook-react-addon-props-combination-stories/
npm install
npm test
```

This will install all required dependencies and run all tests. To watch for test changes run

```shell
npm test -- --watch
```

In order to run an example storybook just execute

```shell
npm run storybook
```

### Building

```shell
npm run build
```

This will bundle the project to `dist/index.js`(CJS) and `dist/index.es6.js`(ES6), create maps and typescript declaration files in `dist` directory.

## Licensing

MIT License

## Acknowledgments

Huge thanks to [evgenykochetkov](https://github.com/evgenykochetkov) whose project [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations) was used as inspiration for this one.
