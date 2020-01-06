import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Logo from ".";

export default {
  title: "Components|Common/Logo",
  decorators: [withKnobs],
  component: Logo
};

export const Default = () => {
  return <Logo />;
};
