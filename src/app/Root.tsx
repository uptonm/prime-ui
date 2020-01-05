import * as React from "react";
import "./styles/base.scss";
import Card from "./components/Common/Card";

class Root extends React.Component<any, any> {
  render() {
    return (
      <>
        <Card
          title="Card Title"
          content="Card text content with two lines for long descriptions."
          action="Button"
        />
      </>
    );
  }
}

export default Root;
