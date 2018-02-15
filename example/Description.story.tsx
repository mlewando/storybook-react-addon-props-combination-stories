import { storiesOf } from "@storybook/react";
import * as React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai as codeStyle } from "react-syntax-highlighter/styles/hljs";

storiesOf("Description", module).add("Descriptiopn", () => (
  <div>
    <p>You can user combination combined with any other normal story! :)</p>
    <p>
      <code>addCombinations</code> just adds another method to your stories
      object. Well... yes... it mutates it's parameter. Sorry for that. But you
      have to agree that this is really convinient to just write:
    </p>
    <SyntaxHighlighter language="javascript" style={codeStyle}>
      {`.withCombinations(
    {
        adminRights: [true, false],
        navigate: [action("Navigation")],
        userLogged: [true, false],
        username: [undefined, "Adam", "Maria"]
    },
    ({ username, navigate, ...props }) =>
        (username || "unknown") +
        ": " +
        Object.keys(props)
            .filter((key: string): boolean => (props as BooleanProps)[key])
            .join(", "),
    Menu
)`}
    </SyntaxHighlighter>
    <p>and have all possible scenarios of component usage covered ;)</p>
  </div>
));
