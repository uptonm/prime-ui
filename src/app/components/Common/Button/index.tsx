import * as React from "react";
import { Colors } from "../../../models/ui/colors";
import Paragraph from "../../Typeography/Paragraph";
import { Borders } from "../../../models/ui/shapes";
import "./style.scss";

export interface IButtonProps {
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  color?: Colors;
  outline?: boolean;
  radius?: Borders;
}

class Button extends React.Component<IButtonProps> {
  public static defaultProps = {
    size: "medium",
    color: "primary",
    outline: false,
    radius: "large"
  };

  render() {
    // ${color}-bg ${radius}-radius}
    return (
      <button
        className={`btn ${this.props.outline ? "btn--outline" : ""} btn--${
          this.props.size
          } ${this.props.color}-bg ${this.props.radius}-radius`}
        disabled={this.props.disabled}
      >
        <Paragraph type={this.props.size === "small" ? "caption" : "body"}>
          {this.props.children}
        </Paragraph>
      </button>
    );
  }
}

export default Button;
