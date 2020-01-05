import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ImageCard } from ".";

export default {
  title: "Components|Common/Card/ImageCard",
  decorators: [withKnobs],
  component: ImageCard
};

export const Default = () => {
  const content = text(
    "Content",
    "Card text content with two lines for long descriptions."
  );
  return <ImageCard title="Hello World" content={content} action="Click Me" />;
};

export const NoAction = () => {
  const content = text(
    "Content",
    "Card text content with two lines for long descriptions."
  );
  return <ImageCard title="Hello World" content={content} />;
};
