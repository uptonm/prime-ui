import * as React from "react";
import "./style.scss";
import { Icon } from "../Icons";

export interface LinkProps {
  to: string;
}

class Link extends React.Component<LinkProps> {
  render() {
    return (
      <a href={this.props.to} className="link">
        {this.props.children}
        <Icon name="ArrowRight" fill="primary" />
      </a>
    );
  }
}

export default Link;
