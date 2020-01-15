import * as React from "react";
import Button from '../Button';
import "./style.scss";

export interface ButtonGroupProps {
  children?: React.ReactElement<Button>[];
}

class ButtonGroup extends React.Component<ButtonGroupProps> {
  render() {
    const { children } = this.props;
    const numChildren = React.Children.count(children);

    if (numChildren < 2) {
      throw Error('Please supply at least 2 Button components to the group');
    }

    return (
      <div className="btn-group">
        {children}
      </div>
    )
  }
}

export default ButtonGroup;
