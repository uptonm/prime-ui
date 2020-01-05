import * as React from "react";
import "./style.scss";
import Image from "../../../../static/images/desert.jpeg";
import { UserAuth } from "../../Page/NavigationBar";
import { ImageAvatar } from "../../Misc/Avatar";
import Paragraph from "../../Typeography/Paragraph";
import { UiIconTypes, InterfaceIconTypes } from "../../../models/ui/icons";
import { Icon } from "../Icons";

export type MenuOption = {
  label: string;
  href: string;
  icon?: UiIconTypes | InterfaceIconTypes;
};
export interface MenuProps {
  auth?: UserAuth;
  options: Array<MenuOption>;
  selected?: boolean;
  style?: object;
}

class Menu extends React.Component<MenuProps> {
  public static defaultProps = {
    selected: false
  };

  render() {
    return (
      <div className="menu" style={this.props.style}>
        {this.props.auth && (
          <div className="menu__option menu__option--large">
            <a className="menu__option-link" href={"#"}>
              <div className="menu__auth">
                <ImageAvatar image_url={Image} image_alt="Avatar" />
                <div className="menu__auth-name">
                  <Paragraph type="body" color="black">
                    {this.props.auth.full_name}
                  </Paragraph>
                  <Paragraph type="caption" color="dark">
                    5 Messages
                  </Paragraph>
                </div>
              </div>
            </a>
          </div>
        )}
        {this.props.options.map(({ label, href, icon }: MenuOption) => {
          return (
            <div className="menu__option">
              <a className="menu__option-link" href={href}>
                {icon ? <Icon name={icon} fill="black" /> : ""}
                <span className="menu__option-link-container">{label}</span>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Menu;
