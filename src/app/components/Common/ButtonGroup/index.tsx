import * as React from "react";
import Button from '../Button';
import "./style.scss";

export interface ButtonGroupProps {
  children?: React.ReactElement<Button>[];
}

class ButtonGroup extends React.Component<ButtonGroupProps> {
  componentDidMount() {

  }

  validateChildren = () => {
    const { children } = this.props;
    const numChildren = React.Children.count(children);

    // At least be 2 buttons supplied
    if (numChildren < 2) {
      throw Error('Please supply at least 2 Button components to the group');
    }

    // All components are buttons
    React.Children.forEach(children, (child) => {
      if (child?.type !== Button) {
        throw Error('Please only supply valid <Button /> components');
      }
    });
  }

  render() {
    return (
      <div className="btn-group">
        {this.props.children}
      </div>
    )
  }
}

export default ButtonGroup;
