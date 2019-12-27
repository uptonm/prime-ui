import * as React from "react";
import { Colors } from "../../../models/ui/colors";
import { IconTypes } from "../../../models/ui/icons";

import ArrowDown from "./Common/ArrowDown";
import ArrowLeft from "./Common/ArrowLeft";
import ArrowRight from "./Common/ArrowRight";
import ArrowUp from "./Common/ArrowUp";
import Back from "./Common/Back";
import ChevronDown from "./Common/ChevronDown";
import ChevronLeft from "./Common/ChevronLeft";
import ChevronRight from "./Common/ChevronRight";
import Close from "./Common/Close";
import List from "./Common/List";
import MenuHorizontal from "./Common/MenuHorizontal";
import MenuVertical from "./Common/MenuVertical";
import Menu from "./Common/Menu";
import MenuAlternative from "./Common/MenuAlternative";
import Minus from "./Common/Minus";
import Ok from "./Common/Ok";
import Paragraph from "./Common/Paragraph";
import Plus from "./Common/Plus";
import Refresh from "./Common/Refresh";
import Rotate from "./Common/Rotate";
import Search from "./Common/Search";
import Sort from "./Common/Sort";

export interface IconProps {
  fill?: Colors;
}

export const Icon: React.FC<{ name: IconTypes; fill: Colors }> = props => {
  switch (props.name) {
    case "ArrowDown":
      return <ArrowDown fill={props.fill} />;
    case "ArrowLeft":
      return <ArrowLeft fill={props.fill} />;
    case "ArrowRight":
      return <ArrowRight fill={props.fill} />;
    case "ArrowUp":
      return <ArrowUp fill={props.fill} />;
    case "Back":
      return <Back fill={props.fill} />;
    case "ChevronDown":
      return <ChevronDown fill={props.fill} />;
    case "ChevronLeft":
      return <ChevronLeft fill={props.fill} />;
    case "ChevronRight":
      return <ChevronRight fill={props.fill} />;
    case "Close":
      return <Close fill={props.fill} />;
    case "List":
      return <List fill={props.fill} />;
    case "Menu":
      return <Menu fill={props.fill} />;
    case "MenuAlternative":
      return <MenuAlternative fill={props.fill} />;
    case "MenuHorizontal":
      return <MenuHorizontal fill={props.fill} />;
    case "MenuVertical":
      return <MenuVertical fill={props.fill} />;
    case "Minus":
      return <Minus fill={props.fill} />;
    case "Ok":
      return <Ok fill={props.fill} />;
    case "Paragraph":
      return <Paragraph fill={props.fill} />;
    case "Plus":
      return <Plus fill={props.fill} />;
    case "Refresh":
      return <Refresh fill={props.fill} />;
    case "Rotate":
      return <Rotate fill={props.fill} />;
    case "Search":
      return <Search fill={props.fill} />;
    case "Sort":
      return <Sort fill={props.fill} />;
    default:
      return <Ok fill={props.fill} />;
  }
};
