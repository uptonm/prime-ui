import * as React from "react";
import Image from "../static/images/desert.png";
import { InitialAvatar, ImageAvatar } from "./components/Misc/Avatar";
import "./styles/base.scss";

class Root extends React.Component<any, any> {
  render() {
    return (
      <>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <InitialAvatar initials="MU" size="small" />
          <InitialAvatar initials="MU" />
          <InitialAvatar initials="MU" size="large" />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <ImageAvatar
            image_url={Image}
            image_alt="Mike's Avatar"
            size="small"
          />
          <ImageAvatar image_url={Image} image_alt="Mike's Avatar" />
          <ImageAvatar
            image_url={Image}
            image_alt="Mike's Avatar"
            size="large"
          />
        </div>
      </>
    );
  }
}

export default Root;
