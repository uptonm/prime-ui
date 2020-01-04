import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import ToggleSwitch from ".";

export default {
  title: "Components|Forms/ToggleSwitch",
  decorators: [withKnobs],
  component: ToggleSwitch
};

export const Default = () => {
  const label = text(
    "Label",
    "Allow us to contact you via email for Product Updates, News and More Exclusive Content."
  );
  const [value, setValue] = React.useState<boolean | undefined>(false);
  return (
    <ToggleSwitch
      label={label}
      value={value}
      onChange={() => setValue(!value)}
    />
  );
};
