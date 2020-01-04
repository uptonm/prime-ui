import * as React from "react";
import "./styles/base.scss";
import { RadioGroup } from "./components/Forms/Radio";

class Root extends React.Component<
  any,
  { value: string; options: Array<string> }
> {
  state = {
    value: "",
    options: ["option 1", "option 2", "option 3", "option 4", "option 5"]
  };

  onChangeHandler(name: string) {
    this.setState({ value: name });
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <RadioGroup
          type="horizontal"
          options={this.state.options}
          value={this.state.value}
          onChangeHandler={this.onChangeHandler.bind(this)}
        />
      </div>
    );
  }
}

export default Root;
