import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Checkbox from ".";

export default {
  title: "Components|Forms/Checkbox",
  decorators: [withKnobs],
  component: Checkbox
};

export const Default = () => {
  const label = text("Label", "Selectable Checkbox Label");
  const [value, setValue] = React.useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };

  return <Checkbox label={label} status={value} onChange={onChange} />;
};
