import * as React from "react";
import "./style.scss";
import Logo from "../../Common/Logo";
import Button from "../../Common/Button";
import Paragraph from "../../Typeography/Paragraph";
import { ImageAvatar } from "../../Misc/Avatar";
import Image from "../../../../static/images/desert.jpeg";
import HamburgerMenu from "react-hamburger-menu";
import { Menu, MenuOption } from "../../Common/Menu";

export type UserAuth = {
  full_name: string;
  username: string;
  email: string;
};

export interface NavBarProps {
  auth?: UserAuth | undefined;
}

class NavBar extends React.Component<NavBarProps> {
  public static defaultProps = {
    auth: undefined
  };

  renderAuth() {
    if (!this.props.auth) {
      return (
        <>
          <Button outline={true}>Sign up</Button>
          <Button>Sign in</Button>
        </>
      );
    } else {
      return (
        <>
          <Paragraph type="callout" color="black">
            {`Hi ${this.props.auth.full_name}`}
          </Paragraph>
          <ImageAvatar image_url={Image} image_alt="Hi" />
        </>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <Logo />
        <ul className="navbar__menu">
          <li className="navbar__menu-item">Item 1</li>
          <li className="navbar__menu-item">Item 2</li>
          <li className="navbar__menu-item">Item 3</li>
          <li className="navbar__menu-item">Item 4</li>
          <li className="navbar__menu-item">Item 5</li>
        </ul>
        <div className="navbar__auth">{this.renderAuth()}</div>
      </div>
    );
  }
}

export interface MobileNavbarState {
  open: boolean;
  options: Array<MenuOption>;
}
class MobileNavBar extends React.Component<NavBarProps, MobileNavbarState> {
  public static defaultProps = {
    auth: undefined
  };

  state = {
    open: false,
    options: [
      { label: "Home", href: "#", icon: "Home" },
      { label: "Favorites", href: "#", icon: "Star" },
      { label: "Categories", href: "#", icon: "List" },
      { label: "Profile", href: "#", icon: "User" },
      { label: "Settings", href: "#", icon: "Settings" }
    ] as Array<MenuOption>
  };

  renderAuth() {
    if (!this.props.auth) {
      return (
        <>
          <Button outline={true}>Sign up</Button>
          <Button>Sign in</Button>
        </>
      );
    } else {
      return (
        <>
          <Paragraph type="callout" color="black">
            {`Hi ${this.props.auth.username}`}
          </Paragraph>
          <ImageAvatar image_url={Image} image_alt="Hi" />
        </>
      );
    }
  }

  handleClick() {
    this.setState({ ...this.state, open: !this.state.open });
  }

  render() {
    return (
      <>
        <div className="navbar">
          <Logo />
          <div className="navbar__hamburger">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </div>
        {this.state.open && (
          <Menu options={this.state.options} auth={this.props.auth} />
        )}
      </>
    );
  }
}

export { NavBar, MobileNavBar };
