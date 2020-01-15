import * as React from "react";
import "./style.scss";
import "@fortawesome/fontawesome-pro/css/all.css";
import Logo from "../../Common/Logo";
import Paragraph from "../../Typeography/Paragraph";
import Input from "../../Forms/Input";

export interface FooterProps {
  columns: FooterColumn[];
  social?: Social;
  message?: string;
}

export type Social = {
  facebook?: string;
  twitter?: string;
  github?: string;
};

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
        {this.props.columns.map((column: FooterColumn, index: number) => {
          return (
            <div key={index} className="footer__column-container">
              <Paragraph
                type="footnote"
                color="dark"
                className="footer__column-header"
              >
                {column.name}
              </Paragraph>
              <ul className="footer__column">
                {column.options.map((option: FooterOption, index: number) => {
                  return (
                    <li key={index} className="footer__column-item">
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

  renderSocial() {
    if (this.props.social) {
      return (
        <>
          <Paragraph
            type="footnote"
            color="dark"
            className="footer__social-header"
          >
            Follow us
          </Paragraph>

          <div className="footer__social-links">
            {this.props.social.facebook ? (
              <a
                href={this.props.social.facebook}
                className="footer__social-link"
              >
                <i className="fab fa-2x fa-facebook"></i>
              </a>
            ) : (
              ""
            )}
            {this.props.social.twitter ? (
              <a
                href={this.props.social.twitter}
                className="footer__social-link"
              >
                <i className="fab fa-2x fa-twitter"></i>
              </a>
            ) : (
              ""
            )}
            {this.props.social.github ? (
              <a
                href={this.props.social.github}
                className="footer__social-link"
              >
                <i className="fab fa-2x fa-facebook"></i>
              </a>
            ) : (
              ""
            )}
          </div>
        </>
      );
    } else {
      return (
        <>
          <Paragraph
            type="footnote"
            color="dark"
            className="footer__social-header"
          >
            Subscribe
          </Paragraph>
          <Input value="" placeholder="Enter email address" />
        </>
      );
    }
  }

  render() {
    return (
      <div className="footer">
        <div className="footer__logo">
          <Logo />
          {this.props.message ? (
            <Paragraph
              type="footnote"
              color="dark"
              className="footer__logo-text"
            >
              {this.props.message}
            </Paragraph>
          ) : (
            ""
          )}
        </div>
        <div className="footer__content">{this.renderFooterContent()}</div>
        <div className="footer__social">{this.renderSocial()}</div>
      </div>
    );
  }
}

export default Footer;
