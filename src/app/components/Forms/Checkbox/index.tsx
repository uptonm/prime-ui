import * as React from "react";
import "./style.scss";
import { Icon } from "../../Common/Icons";
import Paragraph from "../../Typeography/Paragraph";

export interface ICheckboxProps {
  label: string;
  status?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

class Checkbox extends React.Component<ICheckboxProps> {
  public static defaultProps = {
    status: false,
    disabled: false
  };

  render() {
    return (
      <label className="checkbox">
        <Paragraph type="callout" color="black">
          {this.props.label}
        </Paragraph>
        <input
          name={this.props.label}
          type="checkbox"
          checked={this.props.status}
          onChange={this.props.onChange}
        />
        <span className="checkbox__checkmark medium-radius">
          {this.props.status === true && <Icon fill="white" name="Ok" />}
        </span>
      </label>
    );
  }
}

export interface ICheckboxGroupProps {
  onChangeHandler: (name: string) => void;
  type?: "vertical" | "horizontal";
  options: Array<string>;
  value: Array<string>;
}
class CheckboxGroup extends React.Component<ICheckboxGroupProps> {
  public static defaultProps = {
    type: "vertical"
  };

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChangeHandler(event.target.name);
  }

  render() {
    return (
      <div
        className={`checkbox__group ${
          this.props.type === "vertical" ? "checkbox__group--vertical" : ""
        }`}
      >
        {this.props.options.map((option: string, index: number) => {
          return (
            <Checkbox
              key={index}
              label={option}
              status={this.props.value.includes(option)}
              onChange={this.onChange.bind(this)}
            />
          );
        })}
      </div>
    );
  }
}

export default Checkbox;
export { CheckboxGroup };
