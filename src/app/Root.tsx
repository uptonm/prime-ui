import * as React from "react";
import "./styles/base.scss";
import Menu from "./components/Common/Menu";

class Root extends React.Component<any, any> {
  list = [
    { label: "First Item", href: "#" },
    { label: "Second Item", href: "#" }
  ];
  render() {
    return (
      <>
        <Menu options={this.list} />
      </>
    );
  }
}

export default Root;
