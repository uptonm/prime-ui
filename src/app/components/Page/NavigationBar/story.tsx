import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { NavBar, MobileNavBar } from ".";

export default {
  title: "Components|Page/NavBar",
  decorators: [withKnobs],
  component: NavBar
};

export const Default = () => {
  return <NavBar />;
};

export const WithAuth = () => {
  const full_name = text("Full Name", "John Doe");
  const username = text("Username", "JD.27");
  return <NavBar auth={{ username, full_name, email: "" }} />;
};

export const Mobile = () => {
  return <MobileNavBar />;
};

export const MobileWithAuth = () => {
  const full_name = text("Full Name", "James Appleseed");
  const username = text("Username", "JD.27");
  return <MobileNavBar auth={{ username, full_name, email: "" }} />;
};
