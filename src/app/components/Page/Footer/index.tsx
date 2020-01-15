import * as React from "react";
import "./style.scss";
import "@fortawesome/fontawesome-pro/css/all.css";
import Logo from "../../Common/Logo";
import Paragraph from "../../Typeography/Paragraph";

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
              <Paragraph
                type="footnote"
                color="dark"
                className="footer__column-header"
              >
                {column.name}
              </Paragraph>
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
        <div className="footer__logo">
          <Logo />
          <Paragraph type="footnote" color="dark" className="footer__logo-text">
            Prime Design System Kit is well known, time-saving design resource
            for Sketch. Thanks to its features you are able to design 10 times
            faster.
          </Paragraph>
        </div>
        <div className="footer__content">{this.renderFooterContent()}</div>
        <div className="footer__social">
          <Paragraph
            type="footnote"
            color="dark"
            className="footer__social-header"
          >
            Follow us
          </Paragraph>
          <div className="footer__social-links">
            <a href="" className="footer__social-link">
              <i className="fab fa-2x fa-facebook"></i>
            </a>
            <a href="" className="footer__social-link">
              <i className="fab fa-2x fa-twitter"></i>
            </a>
            <a href="" className="footer__social-link">
              <i className="fab fa-2x fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
