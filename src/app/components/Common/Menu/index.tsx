import * as React from "react";
import "./style.scss";

export type MenuOption = { label: string; href: string };
export interface MenuProps {
  options: Array<MenuOption>;
  selected?: boolean;
}

class Menu extends React.Component<MenuProps> {
  public static defaultProps = {
    selected: false
  };
  render() {
    return (
      <div className="menu">
        {this.props.options.map(({ label, href }: MenuOption) => {
          return (
            <div className="menu__option">
              <a className="menu__option-link" href={href}>
                {label}
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Menu;
