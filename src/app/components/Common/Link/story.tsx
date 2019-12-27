import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Link from ".";

export default {
  title: "Components|Common/Link",
  decorators: [withKnobs],
  component: Link
};

export const Default = () => {
  const content = text("Content", "Learn More");
  return <Link to="#">{content}</Link>;
};
