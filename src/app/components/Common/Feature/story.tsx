import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Feature from ".";

export default {
  title: "Components|Common/Feature",
  decorators: [withKnobs],
  component: Feature
};

export const Default = () => {
  const content = text("Content", "First Feature");
  return <Feature>{content}</Feature>;
};
