import * as React from "react";
import { select, withKnobs, text, boolean } from "@storybook/addon-knobs";
import Button from ".";
import { ColorList, Colors } from "../../../models/ui/colors";
import { BorderTypes, Borders } from "../../../models/ui/shapes";

export default {
  title: "Components|Common/Button",
  decorators: [withKnobs],
  component: Button
};

export const Small = () => {
  const content = text("Content", "Submit");
  const color = select("Color", ColorList, "primary");
  const border = select("Radius", BorderTypes, "large");
  const outline = boolean("Outline", false);
  return (
    <Button
      size="small"
      color={color as Colors}
      radius={border as Borders}
      outline={outline}
    >
      {content}
    </Button>
  );
};

export const Medium = () => {
  const color = select("Color", ColorList, "primary");
  const border = select("Radius", BorderTypes, "large");
  return (
    <Button size="medium" color={color as Colors} radius={border as Borders}>
      Submit
    </Button>
  );
};

export const Large = () => {
  const color = select("Color", ColorList, "primary");
  const border = select("Radius", BorderTypes, "large");
  return (
    <Button size="large" color={color as Colors} radius={border as Borders}>
      Submit
    </Button>
  );
};

export const Large_Disabled = () => {
  const color = select("Color", ColorList, "primary");
  const border = select("Radius", BorderTypes, "large");
  return (
    <Button
      size="large"
      color={color as Colors}
      radius={border as Borders}
      disabled
    >
      Submit
    </Button>
  );
};
