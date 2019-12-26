import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Card from ".";

export default {
  title: "Components|Common/Card",
  decorators: [withKnobs],
  component: Card
};

export const Default = () => {
  const content = text(
    "Content",
    "Card text content with two lines for long descriptions."
  );
  return <Card title="Hello World" content={content} action="Click Me" />;
};

export const NoAction = () => {
  const content = text(
    "Content",
    "Card text content with two lines for long descriptions."
  );
  return <Card title="Hello World" content={content} />;
};

export const NoAction_NoContent = () => {
  return <Card title="Hello World" />;
};
