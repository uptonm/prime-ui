import * as React from "react";
import "./style.scss";
import Header from "../../Typeography/Header";
import Paragraph from "../../Typeography/Paragraph";
import Button from "../Button";

export interface ICardProps {
  title?: string;
  content?: string;
  action?: string;
}

class Card extends React.Component<ICardProps> {
  render() {
    return (
      <div className="card">
        <img src="" alt="" className="card__background-image" />
        <div className="card__content">
          {this.props.title && (
            <Header color="white">{this.props.title}</Header>
          )}
          {this.props.content && (
            <Paragraph type="body" color="medium">
              {this.props.content}
            </Paragraph>
          )}
          {this.props.action && <Button>{this.props.action}</Button>}
        </div>
      </div>
    );
  }
}

export default Card;
