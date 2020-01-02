import * as React from "react";
import { withKnobs, boolean, text, number } from "@storybook/addon-knobs";
import "../../../styles/base.scss";
import Input from ".";

export default {
  title: "Components|Forms/Input",
  decorators: [withKnobs],
  component: Input
};

export const Medium = () => {
  const disabled = boolean("Disabled", false);
  const label = text("Label Text", "Sample Placeholder Text");
  const minLength = number("Minimum Length", 5);

  const [value, setValue] = React.useState<string>("");
  const [errors, setErrors] = React.useState<string>(undefined);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
    setErrors(handleErrors(e.target.value));
  };

  const handleErrors = (input: string) => {
    if (input.length < minLength && input !== "") {
      return `String must be at least ${minLength} characters`;
    } else {
      return undefined;
    }
  };

  return (
    <Input
      size="medium"
      disabled={disabled}
      label={label}
      placeholder="Hello World"
      value={value}
      error={errors}
      onChange={changeValue}
    />
  );
};

export const Large = () => {
  const disabled = boolean("Disabled", false);
  const label = text("Label Text", "Sample Placeholder Text");
  const minLength = number("Minimum Length", 5);

  const [value, setValue] = React.useState<string>("");
  const [errors, setErrors] = React.useState<string>(undefined);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
    setErrors(handleErrors(e.target.value));
  };

  const handleErrors = (input: string) => {
    if (input.length < minLength && input !== "") {
      return `String must be at least ${minLength} characters`;
    } else {
      return undefined;
    }
  };

  return (
    <Input
      size="large"
      disabled={disabled}
      label={label}
      placeholder="Hello World"
      value={value}
      error={errors}
      onChange={changeValue}
    />
  );
};
