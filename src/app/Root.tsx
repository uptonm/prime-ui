import * as React from "react";
import "./styles/base.scss";
import Input from "./components/Forms/Input";

class Root extends React.Component {
  state = {
    value: "",
    errors: undefined
  };

  public changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    this.setState({
      ...this.state,
      value: e.target.value,
      errors: this.handleErrors(e.target.value)
    });
  }

  public handleErrors(input: string) {
    if (input.length < 3 && input !== "") {
      return "String must be at least 3 characters";
    } else {
      return undefined;
    }
  }

  render() {
    return (
      <Input
        size="medium"
        disabled={false}
        label="Sample Input"
        placeholder="Hello World"
        value={this.state.value}
        error={this.state.errors}
        onChange={this.changeValue.bind(this)}
      />
    );
  }
}

export default Root;
