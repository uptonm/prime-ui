import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import "../../../styles/base.scss";
import Dropdown from ".";

export default {
  title: "Components|Forms/Dropdown",
  decorators: [withKnobs],
  component: Dropdown
};

export const Medium = () => {
  const label = text("Label", "Dropdown Label");
  const placeholder = text("Placeholder", "Sample Placeholder Text");

  const [options] = React.useState<Array<string>>([
    "hello",
    "hello2",
    "hello3",
    "hello4",
    "hello5",
    "Hello6"
  ]);
  const [value, setValue] = React.useState<string | undefined>(undefined);

  const onSelect = (v: string) => {
    if (v !== value) {
      setValue(v);
    } else {
      setValue(undefined);
    }
  };

  return (
    <Dropdown
      size="medium"
      label={label}
      placeholder={placeholder}
      value={value}
      options={options}
      onChange={onSelect}
    />
  );
};

export const Large = () => {
  const label = text("Label", "Sample Label Text");
  const placeholder = text("Placeholder", "Sample Placeholder Text");

  const [options] = React.useState<Array<string>>([
    "hello",
    "hello2",
    "hello3",
    "hello4",
    "hello5",
    "Hello6"
  ]);
  const [value, setValue] = React.useState<string | undefined>(undefined);

  const onSelect = (v: string) => {
    if (v !== value) {
      setValue(v);
    } else {
      setValue(undefined);
    }
  };

  return (
    <Dropdown
      size="large"
      label={label}
      placeholder={placeholder}
      value={value}
      options={options}
      onChange={onSelect}
    />
  );
};
