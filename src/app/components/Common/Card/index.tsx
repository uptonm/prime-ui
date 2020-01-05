import * as React from "react";
import Header from "../../Typeography/Header";
import Paragraph from "../../Typeography/Paragraph";
import DesertImage from "../../../../static/images/desert.jpeg";
import GrandCanyonImage from "../../../../static/images/grand-canyon.jpeg";
import "./style.scss";
import Button from "../Button";

export interface ICardProps {
  title?: string;
  content?: string;
  action?: string;
  image?: string;
}

class OverlayCard extends React.Component<ICardProps> {
  public static defaultProps = {
    image: DesertImage
  };
  render() {
    return (
      <div className="overlay-card">
        <img
          src={this.props.image}
          alt=""
          className="overlay-card__background-image"
        />
        <div className="overlay-card__content">
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

class ImageCard extends React.Component<ICardProps> {
  public static defaultProps = {
    image: GrandCanyonImage
  };
  render() {
    return (
      <div className={`card ${this.props.action ? "" : "card--no-action"}`}>
        <img src={this.props.image} alt="" className="card__background-image" />
        <div className="card__content">
          {this.props.title && (
            <Header color="black" type="h6">
              {this.props.title}
            </Header>
          )}
          {this.props.content && (
            <Paragraph type="body" color="dark">
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

class InfoCard extends React.Component<ICardProps> {
  render() {
    return (
      <div
        className={`info-card ${
          this.props.action ? "" : "info-card--no-action"
        }`}
      >
        <div className="info-card__content">
          {this.props.title && (
            <Header color="black" type="h6">
              {this.props.title}
            </Header>
          )}
          {this.props.content && (
            <Paragraph type="body" color="dark">
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

export { OverlayCard, ImageCard, InfoCard };
