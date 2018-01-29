# Stories generator for [React Storybook](https://github.com/storybooks/react-storybook)

[![npm version](https://badge.fury.io/js/storybook-react-addon-props-combination-stories.svg)](https://badge.fury.io/js/storybook-react-addon-props-combination-stories)
[![Build Status](https://travis-ci.org/mlewando/storybook-react-addon-props-combination-stories.svg?branch=master)](https://travis-ci.org/mlewando/storybook-react-addon-props-combination-stories)
[![codecov](https://codecov.io/gh/mlewando/storybook-react-addon-props-combination-stories/branch/master/graph/badge.svg)](https://codecov.io/gh/mlewando/storybook-react-addon-props-combination-stories)
[![Dependency Status](https://david-dm.org/mlewando/storybook-react-addon-props-combination-stories.svg)](https://david-dm.org/mlewando/storybook-react-addon-props-combination-stories)
[![devDependency Status](https://david-dm.org/mlewando/storybook-react-addon-props-combination-stories/dev-status.svg)](https://david-dm.org/mlewando/storybook-react-addon-props-combination-stories#info=devDependencies)

[![NPM](https://nodei.co/npm/storybook-react-addon-props-combination-stories.png)](https://npmjs.org/package/storybook-react-addon-props-combination-stories)

> Props Combinations addon for React Storybook that will generate stories for each props combinations

Given possible values for each prop, renders your component with all combinations of prop values.
Useful for finding edge cases or just seeing all component states.
For each props combination it will create a new story in your stories.

This addon is inspierd by [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations). It differs from the [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations) in the way how each combinations is rendered:

* [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations) - renders each combination in **one story**
* storybook-react-addon-props-combination-stories - renders each combinations as **separate story**.

I created this addon, as the approach of putting each combination into one story was not a good suit for my project. The base idea is the same, in my opinion, the [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations) is a good addon for small components, when you can see all the combinations on one screen and check if everything is as expected. This addon is better for more "top level components", when you want to see each variations of eg. one page of your application.

The one more small thing compared to [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations) is that this package is shipped with typings (so you can use TypeScript in your stories without any additional configuration) and bundled in both CJS and ES6 modules.

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

There is only one function exported from this package: `addCombinations(Story)`. It will add new method to your story:

`withCombinations(combinations, descriptionRenderer, component)`

* combinations - an object with array of possible options for all properties that your component needs
* descriptionRenderer - a function that will return description of the story based on one props combination
* component - component that will be rendered inside each story

## How it's working

The addon will basically create story for each props combination derived from combinations object. For example, this basic usage:

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

Bunlded with Rollup and Typescript. Tested with jest. Keep clean with Tslint and Prettier :)

### Setting up Dev

```shell
git clone https://github.com/mlewando/storybook-react-addon-props-combination-stories.git
cd storybook-react-addon-props-combination-stories/
npm install
npm test
```

This will install all required dependencies and run all tests. To wach for test changes run

```shell
npm test -- --watch
```

In order to run example storybook just execute

```shell
npm run storybook
```

### Building

```shell
npm run build
```

This will bundle project to `dist/index.js`(CJS) and `dist/index.es6.js`(ES6), create maps and typescript declaration files in `dist` directory.

## Licensing

MIT License

## Acknowledgments

Huge thanks to [evgenykochetkov](https://github.com/evgenykochetkov) whos projcet [react-storybook-addon-props-combinations](https://github.com/evgenykochetkov/react-storybook-addon-props-combinations) was used as inspiration for this one.
