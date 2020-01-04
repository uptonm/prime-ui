import * as React from "react";
import { InterfaceIconTypes, UiIconTypes } from "../../../models/ui/icons";
import { Colors } from "../../../models/ui/colors";
import "./style.scss";
import { Icon } from "../../Common/Icons";
import Paragraph from "../../Typeography/Paragraph";

export interface BadgeProps {
  icon?: InterfaceIconTypes | UiIconTypes;
  color?: Colors;
  label?: string;
}

class Badge extends React.Component<BadgeProps> {
  public static defaultProps = {
    color: "primary"
  };

  blackText: Array<Colors> = ["white", "light", "medium", "dark"];

  render() {
    return (
      <span
        className={`
          badge 
          ${!this.props.label ? "badge--empty" : ""} 
          ${this.props.color}-bg
          circle-radius
        `}
      >
        {this.props.icon ? (
          <Icon
            name={this.props.icon}
            outline={true}
            fill={
              this.blackText.includes(this.props.color as Colors)
                ? "black"
                : "white"
            }
          />
        ) : (
          ""
        )}
        <Paragraph
          type="callout"
          color={
            this.blackText.includes(this.props.color as Colors)
              ? "black"
              : "white"
          }
        >
          {this.props.label}
        </Paragraph>
      </span>
    );
  }
}

export default Badge;
