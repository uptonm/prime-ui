import * as React from "react";
import "./styles/base.scss";
import { NavBar } from "./components/Page/NavigationBar";

class Root extends React.Component<any, any> {
  list = [
    { label: "First Item", href: "#" },
    { label: "Second Item", href: "#" }
  ];
  render() {
    return (
      <>
        <NavBar />
      </>
    );
  }
}

export default Root;
