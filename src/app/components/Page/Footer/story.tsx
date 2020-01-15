import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
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

export const Footer_ = () => {
  return <Footer columns={fakeColumns} />;
};

export const Footer_With_Social = () => {
  return <Footer columns={fakeColumns} social={fakeSocial} />;
};
