import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: "Props combinations",
  sortStoriesByKind: true,
  url:
    "https://mlewando.github.io/storybook-react-addon-props-combination-stories/",
  hierarchySeparator: /\//
});

function loadStories() {
  var req = require.context("../example/", true, /\.story\.tsx?$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
