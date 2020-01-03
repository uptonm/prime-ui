import * as React from "react";
import "./styles/base.scss";
import Checkbox from "./components/Forms/Checkbox";

class Root extends React.Component {
  state = {
    checked: undefined
  };

  onChange() {
    console.log("Ran");
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Checkbox
          label="Test Checkbox"
          status={this.state.checked}
          onChange={this.onChange.bind(this)}
        />
      </div>
    );
  }
}

export default Root;
