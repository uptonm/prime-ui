import * as React from "react";
import { select, withKnobs, text } from "@storybook/addon-knobs";
import Badge from ".";
import { ColorList, Colors } from "../../../models/ui/colors";
import { IconList, IconTypeList } from "../../../models/ui/icons";

export default {
  title: "Components|Misc/Badge",
  decorators: [withKnobs],
  component: Badge
};

export const Default = () => {
  const color = select("Color", ColorList, "primary");
  const badge_label = text("Badge Label", "");
  return <Badge color={color as Colors} label={badge_label} />;
};

export const WithIcon = () => {
  const color = select("Color", ColorList, "primary");
  const badge_label = text("Badge Label", "Hello World");
  const type = select("Icon Type", IconTypeList, "UI") as "UI" | "Interface";
  const name = select(
    "Icon",
    IconList[type],
    type === "UI" ? "Star" : "Bookmark"
  );
  return <Badge color={color as Colors} label={badge_label} icon={name} />;
};
