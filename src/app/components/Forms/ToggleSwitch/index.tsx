import * as React from "react";
import "./style.scss";
import Paragraph from "../../Typeography/Paragraph";

export interface IToggleSwitchProps {
  label: string;
  value: boolean | undefined;
  onChange: () => void;
}

class ToggleSwitch extends React.Component<IToggleSwitchProps> {
  onChangeHandler(_: React.ChangeEvent<HTMLInputElement>) {
    this.props.onChange();
  }
  render() {
    return (
      <label className="switch">
        <input
          name={this.props.label}
          type="checkbox"
          checked={this.props.value}
          onChange={this.onChangeHandler.bind(this)}
        />
        <span className="slider round"></span>
        <Paragraph type="callout" color="black">
          {this.props.label}
        </Paragraph>
      </label>
    );
  }
}

export default ToggleSwitch;
