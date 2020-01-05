import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { OverlayCard } from ".";

export default {
  title: "Components|Common/Card/OverlayCard",
  decorators: [withKnobs],
  component: OverlayCard
};

export const Default = () => {
  const content = text(
    "Content",
    "Card text content with two lines for long descriptions."
  );
  return (
    <OverlayCard title="Hello World" content={content} action="Click Me" />
  );
};

export const NoAction = () => {
  const content = text(
    "Content",
    "Card text content with two lines for long descriptions."
  );
  return <OverlayCard title="Hello World" content={content} />;
};

export const NoAction_NoContent = () => {
  return <OverlayCard title="Hello World" />;
};
