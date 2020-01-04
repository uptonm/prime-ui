import * as React from "react";
import "./style.scss";

export interface InitialAvatarProps {
  size?: "small" | "medium" | "large";
  initials: string;
}

export interface ImageAvatarProps {
  size?: "small" | "medium" | "large";
  image_url: string;
  image_alt: string;
}

class InitialAvatar extends React.Component<InitialAvatarProps> {
  public static defaultProps = {
    size: "medium"
  };
  render() {
    return (
      <div className={`avatar avatar--initials avatar--${this.props.size}`}>
        <span className="avatar__initials">{this.props.initials}</span>
      </div>
    );
  }
}

class ImageAvatar extends React.Component<ImageAvatarProps> {
  public static defaultProps = {
    size: "medium"
  };
  render() {
    return (
      <div className={`avatar avatar--${this.props.size}`}>
        <img
          src={this.props.image_url}
          alt={this.props.image_alt}
          className="avatar__img"
        />
      </div>
    );
  }
}

export { InitialAvatar, ImageAvatar };
