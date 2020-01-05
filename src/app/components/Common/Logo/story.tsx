import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Logo from ".";

export default {
  title: "Components|Common/Logo",
  decorators: [withKnobs],
  component: Logo
};

export const Default = () => {
  const content = text("Content", "Learn More");
  return <Logo />;
};
