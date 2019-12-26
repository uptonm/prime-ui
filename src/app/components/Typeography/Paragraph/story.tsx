import * as React from "react";
import { select, withKnobs } from "@storybook/addon-knobs";
import Paragraph from ".";
import { ColorList, Colors } from "../../../models/ui/colors";
import {
  ParagraphTypes,
  ParagraphTypeList
} from "../../../models/ui/typeography";

const sample_paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum
accusantium facilis quo voluptatum vitae, deserunt in non incidunt hic.
Minima repellendus aspernatur cum, ex accusamus praesentium esse reiciendis
quasi.`;

export default {
  title: "Typeography|Paragraph",
  decorators: [withKnobs],
  component: Paragraph
};

export const Default = () => {
  const color = select("Color", ColorList, "black");
  const type = select("Type", ParagraphTypeList, "body");
  return (
    <Paragraph type={type as ParagraphTypes} color={color as Colors}>
      {sample_paragraph}
    </Paragraph>
  );
};
