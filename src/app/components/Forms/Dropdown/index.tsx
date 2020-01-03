import * as React from "react";
import { Icon } from "../../Common/Icons";
import DropdownItem from "./DropdownItem";
import "./style.scss";
import Paragraph from "../../Typeography/Paragraph";

export interface IDropdownProps {
  label?: string;
  value?: string;
  placeholder?: string;
  options: Array<string>;
  size?: "medium" | "large";
  onChange: (value: string) => void;
}

export interface IDropdownState {
  open: boolean;
}

class Dropdown extends React.Component<IDropdownProps, IDropdownState> {
  public static defaultProps = {
    size: "medium"
  };

  state = {
    open: false
  };

  escFunction(event: any) {
    if (event.keyCode === 27) {
      //Do whatever when esc is pressed
      this.setState({ open: false });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction.bind(this), false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction.bind(this), false);
  }

  renderIcon() {
    return this.state.open ? (
      <Icon name="ChevronUp" fill={this.state.open ? "black" : "dark"} />
    ) : (
      <Icon name="ChevronDown" fill={this.state.open ? "black" : "dark"} />
    );
  }

  toggleOpen() {
    this.setState({ ...this.state, open: !this.state.open });
  }

  onSelect(value: string) {
    this.props.onChange(value);
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="dropdown__container">
        <Paragraph color="black" type="caption" style={{ marginBottom: "5px" }}>
          {this.props.label}
        </Paragraph>
        <div
          onBlur={() => console.log("blurred")}
          className={`
          dropdown 
          dropdown--${this.props.size} 
          dropdown--${this.state.open ? "open" : "closed"}
      `}
        >
          <div
            className={`dropdown__header-wrapper ${this.props.size}-radius`}
            onClick={this.toggleOpen.bind(this)}
          >
            <div
              className="dropdown__header"
              style={this.props.value ? { color: "#000" } : {}}
            >
              {this.props.value || this.props.placeholder || this.props.label}
            </div>
            {this.renderIcon()}
          </div>
          <ul className="dropdown__list">
            {this.props.options.map((option: string, index: number) => (
              <DropdownItem
                key={index}
                label={option}
                selected={this.props.value === option}
                onSelect={this.onSelect.bind(this)}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;
