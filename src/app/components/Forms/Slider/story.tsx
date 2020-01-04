import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Slider from ".";

export default {
  title: "Components|Forms/Slider",
  decorators: [withKnobs],
  component: Slider
};

export const Default = () => {
  const label = text("Label", "How Satisfied Have You Been?");
  const [value, setValue] = React.useState<number>(50);

  const handleChange = (v: number) => {
    setValue(v);
  };

  return <Slider label={label} value={value} onChange={handleChange} />;
};
