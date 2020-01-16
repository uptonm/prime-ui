import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import Footer, { FooterColumn, Social } from ".";

export default {
  title: "Components|Page/Footer",
  decorators: [withKnobs],
  component: Footer
};

const fakeColumns: FooterColumn[] = [
  {
    name: "Column 1",
    options: [
      { label: "First Item", href: "/" },
      { label: "Second Item", href: "/" },
      { label: "Third Item", href: "/" },
      { label: "Fourth Item", href: "/" },
      { label: "Fifth Item", href: "/" }
    ]
  },
  {
    name: "Column 2",
    options: [
      { label: "First Item", href: "/" },
      { label: "Second Item", href: "/" },
      { label: "Third Item", href: "/" },
      { label: "Fourth Item", href: "/" },
      { label: "Fifth Item", href: "/" }
    ]
  },
  {
    name: "Column 3",
    options: [
      { label: "First Item", href: "/" },
      { label: "Second Item", href: "/" },
      { label: "Third Item", href: "/" },
      { label: "Fourth Item", href: "/" },
      { label: "Fifth Item", href: "/" }
    ]
  }
];

const fakeSocial: Social = {
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  github: "https://github.com"
};

const fakeMessage: string =
  "Prime Design System Kit is well known, time-saving design resource for Sketch. Thanks to its features you are able to design 10 times faster.";

export const Footer_ = () => {
  const message = text("Message", fakeMessage);
  return <Footer columns={fakeColumns} message={message} />;
};

export const Footer_With_Social = () => {
  const message = text("Message", fakeMessage);
  return <Footer columns={fakeColumns} social={fakeSocial} message={message} />;
};
