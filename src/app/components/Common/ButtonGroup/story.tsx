import * as React from "react";
import { select, withKnobs, text, boolean } from "@storybook/addon-knobs";
import Button from '../Button';
import ButtonGroup from '.';
import { ColorList, Colors } from "../../../models/ui/colors";
import { BorderTypes, Borders } from "../../../models/ui/shapes";

export default {
  title: "Components|Common/ButtonGroup",
  decorators: [withKnobs],
  component: Button, ButtonGroup
};

export const SmallButtonGroup = () => {
  const content = text("Content", "Submit");
  const color = select("Color", ColorList, "primary");
  const border = select("Radius", BorderTypes, "large");
  const outline = boolean("Outline", false);
  return (
    <ButtonGroup>
      <Button
        size="small"
        color={color as Colors}
        radius={border as Borders}
        outline={outline}
      >
        {content}
      </Button>
      <Button
        size="small"
        color={color as Colors}
        radius={border as Borders}
        outline={outline}
      >
        {content}
      </Button>
      <Button
        size="small"
        color={color as Colors}
        radius={border as Borders}
        outline={outline}
      >
        {content}
      </Button>
    </ButtonGroup>
  );
};
