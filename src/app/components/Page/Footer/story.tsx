import * as React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Footer, { FooterColumn } from ".";

export default {
  title: "Components|Page/Footer",
  decorators: [withKnobs],
  component: Footer
};

const fakeColumns: FooterColumn[] = [
  {
    name: "Column 1",
    options: [
      { label: "Option 1", href: "/" },
      { label: "Option 2", href: "/" },
      { label: "Option 3", href: "/" },
      { label: "Option 4", href: "/" },
      { label: "Option 5", href: "/" }
    ]
  },
  {
    name: "Column 2",
    options: [
      { label: "Option 1", href: "/" },
      { label: "Option 2", href: "/" },
      { label: "Option 3", href: "/" },
      { label: "Option 4", href: "/" },
      { label: "Option 5", href: "/" }
    ]
  },
  {
    name: "Column 3",
    options: [
      { label: "Option 1", href: "/" },
      { label: "Option 2", href: "/" },
      { label: "Option 3", href: "/" },
      { label: "Option 4", href: "/" },
      { label: "Option 5", href: "/" }
    ]
  }
];

export const Footer_ = () => {
  return <Footer columns={fakeColumns} />;
};
