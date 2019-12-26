import * as React from "react";
import { select, withKnobs } from "@storybook/addon-knobs";
import Header from ".";
import { ColorList, Colors } from "../../../models/ui/colors";
import { HeaderTypes, HeaderTypeList } from "../../../models/ui/typeography";

const sample_header = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum`;

export default {
  title: "Typeography|Header",
  decorators: [withKnobs],
  component: Header
};

export const Default = () => {
  const color = select("Color", ColorList, "black");
  const type = select("Type", HeaderTypeList, "h1");
  return (
    <Header type={type as HeaderTypes} color={color as Colors}>
      {sample_header}
    </Header>
  );
};
