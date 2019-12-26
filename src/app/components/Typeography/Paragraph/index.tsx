import * as React from "react";
import "./style.scss";
import { Colors } from "../../../models/ui/colors";
import { ParagraphTypes } from "../../../models/ui/typeography";

export interface IParagraphProps {
  type?: ParagraphTypes;
  color?: Colors;
}

class Paragraph extends React.Component<IParagraphProps> {
  public static defaultProps = {
    type: "body",
    color: "black"
  };

  render() {
    return (
      <p
        className={`paragraph paragraph--${this.props.type} ${this.props.color}-text`}
      >
        {this.props.children}
      </p>
    );
  }
}

export default Paragraph;
