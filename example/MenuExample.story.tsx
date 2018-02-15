import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { addCombinations } from "../src";

function Menu(props: {
  userLogged: boolean;
  username?: string;
  adminRights: boolean;
  navigate: (where: string) => void;
}) {
  const showAdminLink =
    props.userLogged && props.adminRights && !!props.username;
  const accountLinkText = `Hi ${props.username || "my dear anonymous friend"}`;
  return (
    <ul>
      <li>
        <a onClick={() => props.navigate("home")}>Go home</a>
      </li>
      <li>
        <a onClick={() => props.navigate("some screen")}>Go somewhere</a>
      </li>
      {showAdminLink && (
        <li>
          <a onClick={() => props.navigate("beware of admin")}>
            Hi admin {props.username}
          </a>
        </li>
      )}
      {props.userLogged && (
        <li>
          <a onClick={() => props.navigate("account")}>{accountLinkText}</a>
        </li>
      )}
    </ul>
  );
}

interface BooleanProps {
  userLogged: boolean;
  adminRights: boolean;
  [key: string]: boolean;
}
addCombinations(storiesOf("Example/Menu", module)).withCombinations(
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
);
