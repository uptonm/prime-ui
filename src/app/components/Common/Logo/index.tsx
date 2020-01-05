import * as React from "react";
import CompanyLogo from "../../../../static/images/company-logo.png";

export interface LogoProps {
  style?: object;
  className?: string;
}

class Logo extends React.Component<LogoProps> {
  render() {
    return (
      <img
        src={CompanyLogo}
        alt="Company Logo"
        style={this.props.style}
        className={this.props.className}
      />
    );
  }
}

export default Logo;
