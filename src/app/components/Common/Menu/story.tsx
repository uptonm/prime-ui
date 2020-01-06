import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Menu, MenuLink } from ".";

export default {
  title: "Components|Common/Menu",
  decorators: [withKnobs],
  component: Menu
};

export const Menu_Link = () => {
  const content = text("Content", "Menu Link Content");
  return <MenuLink label={content} href="/" />;
};

export const Two = () => {
  const list = [
    { label: "First Item", href: "/" },
    { label: "Second Item", href: "/" }
  ];
  return <Menu options={list} />;
};

export const Three = () => {
  const list = [
    { label: "First Item", href: "/" },
    { label: "Second Item", href: "/" },
    { label: "Third Item", href: "/" }
  ];
  return <Menu options={list} />;
};

export const Five = () => {
  const list = [
    { label: "First Item", href: "/" },
    { label: "Second Item", href: "/" },
    { label: "Third Item", href: "/" },
    { label: "Fourth Item", href: "/" },
    { label: "Fifth Item", href: "/" }
  ];
  return <Menu options={list} />;
};
