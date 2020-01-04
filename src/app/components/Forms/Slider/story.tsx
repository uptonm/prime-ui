import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Slider from ".";
import Paragraph from "../../Typeography/Paragraph";

export default {
  title: "Components|Forms/Slider",
  decorators: [withKnobs],
  component: Slider
};

export const Default = () => {
  const [value, setValue] = React.useState<number>(50);

  const handleChange = (v: number) => {
    setValue(v);
  };

  return (
    <>
      <Slider value={value} onChange={handleChange} />
      <Paragraph type="callout">{value}</Paragraph>
    </>
  );
};
