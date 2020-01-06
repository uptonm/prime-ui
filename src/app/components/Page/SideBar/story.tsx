import * as React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import SideBar from ".";
import { MenuOption } from "../../Common/Menu";
import { UserAuth } from "../NavigationBar";

export default {
  title: "Components|Page/SideBar",
  decorators: [withKnobs],
  component: SideBar
};

export const Default = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const options: Array<MenuOption> = [
    { label: "Home", href: "#", icon: "Home" },
    { label: "Favorites", href: "#", icon: "Star" },
    { label: "Categories", href: "#", icon: "List" },
    { label: "Profile", href: "#", icon: "User" },
    { label: "Settings", href: "#", icon: "Settings" }
  ];

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <div style={{ width: "320px", height: "94vh" }}>
      <SideBar options={options} open={open} onClose={handleClose} />
    </div>
  );
};

export const With_Auth = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const options: Array<MenuOption> = [
    { label: "Home", href: "#", icon: "Home" },
    { label: "Favorites", href: "#", icon: "Star" },
    { label: "Categories", href: "#", icon: "List" },
    { label: "Profile", href: "#", icon: "User" },
    { label: "Settings", href: "#", icon: "Settings" }
  ];

  const auth: UserAuth = {
    full_name: text("Full Name", "John Doe"),
    username: text("Username", "j_doe6969"),
    email: text("Email", "j_doe@gmail.com")
  };

  const handleClose = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <div style={{ width: "320px", height: "94vh" }}>
      <SideBar
        options={options}
        auth={auth}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};
