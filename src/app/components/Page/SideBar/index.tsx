import * as React from "react";
import ReactHamburger from "react-hamburger-menu";
import Image from "../../../../static/images/desert.jpeg";
import { MenuOption, MenuLink } from "../../Common/Menu";
import { ImageAvatar } from "../../Misc/Avatar";
import { UserAuth } from "../NavigationBar";
import Logo from "../../Common/Logo";
import "./style.scss";
import Paragraph from "../../Typeography/Paragraph";
import { Icon } from "../../Common/Icons";

export interface SidebarProps {
  auth?: UserAuth;
  options: Array<MenuOption>;
  open?: boolean;
  onClose: () => void;
}

class SideBar extends React.Component<SidebarProps> {
  renderAuth() {
    if (!this.props.open) {
      return;
    }
    if (this.props.auth) {
      return (
        <div className="sidebar__auth">
          <ImageAvatar image_url={Image} image_alt="avatar" />
          <div className="sidebar__auth-name">
            <Paragraph type="body" color="black">
              {this.props.auth.full_name}
            </Paragraph>
            <Paragraph type="caption" color="dark">
              5 Messages
            </Paragraph>
          </div>
        </div>
      );
    } else {
      return <Logo className="sidebar__logo" />;
    }
  }
  renderMenu() {
    if (!this.props.open) {
      return (
        this.props.options &&
        this.props.options.map((option: MenuOption, index: number) => {
          return (
            <a className="sidebar__option-link" href={option.href}>
              <Icon name={option.icon || "Settings"} fill="dark" />
            </a>
          );
        })
      );
    } else {
      return (
        this.props.options &&
        this.props.options.map((option: MenuOption, index: number) => {
          return <MenuLink key={index} {...option} icon={undefined} />;
        })
      );
    }
  }
  render() {
    return (
      <div className={`sidebar ${!this.props.open ? "sidebar--closed" : ""}`}>
        <div className="sidebar__header-container">
          {this.renderAuth()}
          <ReactHamburger
            isOpen={this.props.open || false}
            menuClicked={this.props.onClose}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
        <div className="sidebar__menu">{this.renderMenu()}</div>
        <button className="sidebar__cta-button">
          {this.props.open ? "Sign out" : <Icon name="Close" fill="white" />}
        </button>
      </div>
    );
  }
}

export default SideBar;
