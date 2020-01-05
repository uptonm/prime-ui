import * as React from "react";
import { select, withKnobs, text } from "@storybook/addon-knobs";
import { InitialAvatar, ImageAvatar } from ".";
import AvatarImage from "../../../../static/images/desert.jpeg";

export default {
  title: "Components|Misc/Avatar",
  decorators: [withKnobs],
  component: InitialAvatar
};

export const Initials = () => {
  const size = select("Size", ["small", "medium", "large"], "medium");
  const initials = text("Initials", "JD");
  return <InitialAvatar size={size} initials={initials} />;
};

export const Image = () => {
  const size = select("Size", ["small", "medium", "large"], "medium");
  return (
    <ImageAvatar size={size} image_url={AvatarImage} image_alt="Avatar Image" />
  );
};
