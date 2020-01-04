import * as React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Radio, { RadioGroup } from ".";

export default {
  title: "Components|Forms/Radio",
  decorators: [withKnobs],
  component: Radio
};

export const Default = () => {
  const label = text("Label", "Selectable Checkbox Label");
  const [value, setValue] = React.useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };

  return <Radio label={label} status={value} onChange={onChange} />;
};

export const Radio_Group = () => {
  const type = select("Type", ["horizontal", "vertical"], "horizontal");
  const [value, setValue] = React.useState<string>("");
  const options: Array<string> = [
    "option 1",
    "option 2",
    "option 3",
    "option 4",
    "option 5"
  ];

  const onChangeHandler = (name: string) => {
    setValue(name);
  };

  return (
    <RadioGroup
      type={type}
      options={options}
      value={value}
      onChangeHandler={onChangeHandler}
    />
  );
};
