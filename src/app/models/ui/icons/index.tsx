export type UiIconTypes =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUp"
  | "Back"
  | "ChevronDown"
  | "ChevronLeft"
  | "ChevronRight"
  | "Close"
  | "List"
  | "MenuHorizontal"
  | "MenuVertical"
  | "Menu"
  | "MenuAlternative"
  | "Minus"
  | "Ok"
  | "Paragraph"
  | "Plus"
  | "Refresh"
  | "Rotate"
  | "Search"
  | "Settings"
  | "Share"
  | "Sort"
  | "Star"
  | "Success"
  | "User"
  | "Warning";

export type InterfaceIconTypes =
  | "Bookmark"
  | "Cart"
  | "Calendar"
  | "Call"
  | "Chart"
  | "Cloud"
  | "Edit"
  | "Error"
  | "Filter"
  | "Grid"
  | "Heart"
  | "Home"
  | "Info"
  | "Message";

export const UiIconList: Array<UiIconTypes> = [
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "Back",
  "ChevronDown",
  "ChevronLeft",
  "ChevronRight",
  "Close",
  "List",
  "MenuHorizontal",
  "MenuVertical",
  "Menu",
  "MenuAlternative",
  "Minus",
  "Ok",
  "Paragraph",
  "Plus",
  "Refresh",
  "Rotate",
  "Search",
  "Settings",
  "Share",
  "Sort",
  "Star",
  "Success",
  "User",
  "Warning"
];

export const InterfaceIconList: Array<InterfaceIconTypes> = [
  "Bookmark",
  "Cart",
  "Calendar",
  "Call",
  "Chart",
  "Cloud",
  "Edit",
  "Error",
  "Filter",
  "Grid",
  "Heart",
  "Home",
  "Info",
  "Message"
];

export type IconTypes = "UI" | "Interface";
export const IconTypeList = ["UI", "Interface"];

export const IconList: {
  UI: Array<UiIconTypes>;
  Interface: Array<InterfaceIconTypes>;
} = {
  UI: UiIconList,
  Interface: InterfaceIconList
};
