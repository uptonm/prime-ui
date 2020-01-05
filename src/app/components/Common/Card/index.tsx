import * as React from "react";
import Header from "../../Typeography/Header";
import Paragraph from "../../Typeography/Paragraph";
import Image from "../../../../static/images/desert.jpeg";
import "./style.scss";
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
        <img src={Image} alt="" className="card__background-image" />
        <div className="card__content">
          {this.props.title && (
            <Header color="white" type="h6">
              {this.props.title}
            </Header>
          )}
          {this.props.content && (
            <Paragraph type="body" color="medium">
              {this.props.content}
            </Paragraph>
          )}
          {this.props.action && (
            <Button radius="medium">{this.props.action}</Button>
          )}
        </div>
      </div>
    );
  }
}

export default Card;
