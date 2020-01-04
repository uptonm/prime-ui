import * as React from "react";
import "./styles/base.scss";
import { RadioGroup } from "./components/Forms/Radio";
import ToggleSwitch from "./components/Forms/ToggleSwitch";
import Slider from "./components/Forms/Slider";

class Root extends React.Component<any, any> {
  state = {
    value: 50
  };

  onChangeHandler(value: number) {
    this.setState({ value });
  }

  render() {
    return (
      <Slider
        value={this.state.value}
        onChange={this.onChangeHandler.bind(this)}
      />
    );
  }
}

export default Root;
