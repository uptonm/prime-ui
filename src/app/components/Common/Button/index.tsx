import * as React from "react";
import { Colors } from "../../../models/ui/colors";
import Paragraph from "../../Typeography/Paragraph";
import { Borders, GroupPlacement } from "../../../models/ui/shapes";
import "./style.scss";

export interface IButtonProps {
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  color?: Colors;
  outline?: boolean;
  radius?: Borders;
  inGroup?: boolean;
  groupPlacement?: GroupPlacement;
}

class Button extends React.Component<IButtonProps> {
  public static defaultProps = {
    size: "medium",
    color: "primary",
    outline: false,
    radius: "large",
    inGroup: false,
    groupPlacement: null
  };

  render() {
    // ${color}-bg ${radius}-radius}
    return (
      <button
        className={`btn ${this.props.outline ? "btn--outline" : ""} btn--${
          this.props.size
          } ${this.props.color}-bg ${this.props.radius}-radius ${this.props.inGroup} ? ${this.props.groupPlacement} : ""`}
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
