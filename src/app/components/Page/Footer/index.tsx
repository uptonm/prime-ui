import * as React from "react";
import "./style.scss";
import Logo from "../../Common/Logo";
import Link from "../../Common/Link";

export interface FooterProps {
  columns: FooterColumn[];
}

export type FooterOption = {
  label: string;
  href: string;
};

export type FooterColumn = {
  name: string;
  options: FooterOption[];
};

class Footer extends React.Component<FooterProps> {
  renderFooterContent() {
    return (
      <>
        {this.props.columns.map((column: FooterColumn) => {
          return (
            <div className="footer__column-container">
              <h1 className="footer__column-header">{column.name}</h1>
              <ul className="footer__column">
                {column.options.map((option: FooterOption) => {
                  return (
                    <li className="footer__column-item">
                      <a href={option.href} className="footer__column-link">
                        {option.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </>
    );
  }

  render() {
    return (
      <div className="footer">
        <Logo />
        <div className="footer__content">{this.renderFooterContent()}</div>
        <div className="footer__contact">
          <Link to="/">Subscribe</Link>
        </div>
      </div>
    );
  }
}

export default Footer;
