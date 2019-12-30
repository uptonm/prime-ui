import * as React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { Icon } from ".";
import { IconList, IconTypeList } from "../../../models/ui/icons";
import { ColorList, Colors } from "../../../models/ui/colors";

export default {
  title: "Components|Common/Icon",
  decorators: [withKnobs],
  component: Icon
};

export const Default = () => {
  const type = select("Icon Type", IconTypeList, "UI") as "UI" | "Interface";
  const name = select(
    "Icon",
    IconList[type],
    type === "UI" ? "ArrowDown" : "Bookmark"
  );
  const color = select("Color", ColorList, "black");
  const outline = boolean("Outline", false);

  return <Icon name={name} fill={color as Colors} outline={outline} />;
};
