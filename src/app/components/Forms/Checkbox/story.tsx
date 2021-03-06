import * as React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Checkbox, { CheckboxGroup } from ".";

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

export const Checkbox_Group = () => {
  const type = select("Type", ["horizontal", "vertical"], "horizontal");
  const [value, setValue] = React.useState<Array<string>>([]);
  const options: Array<string> = [
    "option 1",
    "option 2",
    "option 3",
    "option 4",
    "option 5"
  ];

  const onChangeHandler = (name: string) => {
    if (!value.includes(name)) {
      setValue([...value, name]);
    } else {
      const removed = value.filter((value: string) => value !== name);
      setValue(removed);
    }
  };

  return (
    <CheckboxGroup
      type={type}
      options={options}
      value={value}
      onChangeHandler={onChangeHandler}
    />
  );
};
