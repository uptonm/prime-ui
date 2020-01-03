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

export default Checkbox;
