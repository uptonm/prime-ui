import * as React from "react";
import { Icon } from "../../../Common/Icons";

export interface IDropdownItemProps {
  label: string;
  selected: boolean;
  onSelect: (label: string) => void;
}

class DropdownItem extends React.Component<IDropdownItemProps> {
  render() {
    return (
      <li
        onClick={() => this.props.onSelect(this.props.label)}
        className={`dropdown__list-item 
          ${this.props.selected ? "dropdown__list-item--selected" : ""}
      `}
      >
        {this.props.label}
        {this.props.selected && <Icon name="Ok" fill="primary" />}
      </li>
    );
  }
}

export default DropdownItem;
