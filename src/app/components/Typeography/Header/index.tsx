import * as React from "react";
import "./style.scss";
import { Colors } from "../../../models/ui/colors";
import { HeaderTypes } from "../../../models/ui/typeography";

export interface IHeaderProps {
  style?: object;
  type?: HeaderTypes;
  color?: Colors;
}

class Header extends React.Component<IHeaderProps> {
  public static defaultProps = {
    type: "body",
    color: "black"
  };

  render() {
    return (
      <h1
        style={this.props.style}
        className={`header header--${this.props.type} ${this.props.color}-text`}
      >
        {this.props.children}
      </h1>
    );
  }
}

export default Header;
