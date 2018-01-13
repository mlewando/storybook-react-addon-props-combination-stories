import { configure } from "@storybook/react";

function loadStories() {
  var req = require.context("../src/example/", true, /\.story\.tsx?$/);
  req.keys().forEach(req);
}

configure(loadStories, module);
