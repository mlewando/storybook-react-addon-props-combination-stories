# storybook-react-addon-props-combination-stories

> Props Combinations addon for React Storybook that will generate stories for each props combinations

Given possible values for each prop, renders your component with all combinations of prop values.
Useful for finding edge cases or just seeing all component states.
For each props combination it will create a new story in your stories.

## Installing / Getting started

```shell
npm install storybook-react-addon-props-combination-stories
```

> TODO - explain installatioin

## Developing

### Built With

Bunlded with Rollup and Typescript. Tested with jest.

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

### Building

```shell
npm run build
```

This will bundle project to `dist/index.js` and create map and typescript declaration files in `dist` directory.

### Deploying / Publishing

give instructions on how to build and release a new version
In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy your-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Versioning

We can maybe use [SemVer](http://semver.org/) for versioning. For the versions available, see the [link to tags on this repository](/tags).

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

## Tests

Describe and show how to run the tests with code examples.
Explain what these tests test and why.

```shell
Give an example
```

## Licensing

MIT License
