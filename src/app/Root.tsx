import * as React from "react";
import "./styles/base.scss";
import Dropdown from "./components/Forms/Dropdown";

export interface IRootState {
  options: Array<string>;
  value: string | undefined;
}
class Root extends React.Component<any, IRootState> {
  state = {
    options: ["hello", "hello2", "hello3", "hello4", "hello5", "Hello6"],
    value: undefined
  };

  onSelect(value: string) {
    if (value !== this.state.value) {
      this.setState({ value });
    } else {
      this.setState({ value: undefined });
    }
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Dropdown
          label="This is a dropdown"
          options={this.state.options}
          value={this.state.value}
          onChange={this.onSelect.bind(this)}
        />
      </div>
    );
  }
}

export default Root;
