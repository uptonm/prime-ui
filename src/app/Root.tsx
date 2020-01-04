import * as React from "react";
import "./styles/base.scss";
import { RadioGroup } from "./components/Forms/Radio";
import ToggleSwitch from "./components/Forms/ToggleSwitch";

class Root extends React.Component<
  any,
  { value: boolean | undefined; label: string }
> {
  state = {
    value: false,
    label: "Sample Toggle Switch"
  };

  onChangeHandler() {
    this.setState({ value: !this.state.value });
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <ToggleSwitch
          value={this.state.value}
          label={this.state.label}
          onChange={this.onChangeHandler.bind(this)}
        />
      </div>
    );
  }
}

export default Root;
