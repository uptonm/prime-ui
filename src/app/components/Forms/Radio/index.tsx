import * as React from "react";
import "./style.scss";
import Paragraph from "../../Typeography/Paragraph";

export interface IRadioProps {
  label: string;
  status?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

class Radio extends React.Component<IRadioProps> {
  public static defaultProps = {
    status: false,
    disabled: false
  };

  render() {
    return (
      <label className="radio">
        <input
          name={this.props.label}
          type="radio"
          checked={this.props.status}
          onChange={this.props.onChange}
        />
        <span className="radio__checkmark medium-radius"></span>
        <Paragraph type="callout" color="black">
          {this.props.label}
        </Paragraph>
      </label>
    );
  }
}

export interface IRadioGroupProps {
  onChangeHandler: (name: string) => void;
  type?: "vertical" | "horizontal";
  options: Array<string>;
  value: string;
}
class RadioGroup extends React.Component<IRadioGroupProps> {
  public static defaultProps = {
    type: "vertical"
  };

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChangeHandler(event.target.name);
  }

  render() {
    return (
      <div
        className={`radio__group ${
          this.props.type === "vertical" ? "radio__group--vertical" : ""
        }`}
      >
        {this.props.options.map((option: string, index: number) => {
          return (
            <Radio
              key={index}
              label={option}
              status={this.props.value === option}
              onChange={this.onChange.bind(this)}
            />
          );
        })}
      </div>
    );
  }
}

export default Radio;
export { RadioGroup };
