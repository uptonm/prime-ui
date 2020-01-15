import * as React from "react";
import Button from '../Button';
import "./style.scss";

class ButtonGroup extends React.Component {
  render() {
    const { children } = this.props;



    return (
      <div>
        {children};
      </div>
    )
  }
}

export default ButtonGroup;
