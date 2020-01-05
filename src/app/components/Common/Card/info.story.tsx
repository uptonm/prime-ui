import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { InfoCard } from ".";

export default {
  title: "Components|Common/Card/InfoCard",
  decorators: [withKnobs],
  component: InfoCard
};

export const Default = () => {
  const content = text(
    "Content",
    "Card text content with two lines for long descriptions."
  );
  return <InfoCard title="Hello World" content={content} action="Click Me" />;
};

export const NoAction = () => {
  const content = text(
    "Content",
    "Card text content with two lines for long descriptions."
  );
  return <InfoCard title="Hello World" content={content} />;
};
