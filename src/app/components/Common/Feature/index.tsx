import * as React from "react";
import "./style.scss";
import Paragraph from "../../Typeography/Paragraph";
import { Icon } from "../Icons";

class Feature extends React.Component {
  render() {
    return (
      <span className="feature">
        <Icon name="Ok" fill="success" />
        <Paragraph type="footnote" color="dark">
          {this.props.children}
        </Paragraph>
      </span>
    );
  }
}

export default Feature;
