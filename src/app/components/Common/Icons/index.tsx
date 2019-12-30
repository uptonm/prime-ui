import * as React from "react";
import { Colors } from "../../../models/ui/colors";
import { InterfaceIconTypes, UiIconTypes } from "../../../models/ui/icons";

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

import Bookmark from "./Interface/Bookmark";
import Calendar from "./Interface/Calendar";
import Call from "./Interface/Call";
import Cart from "./Interface/Cart";
import Chart from "./Interface/Chart";
import Cloud from "./Interface/Cloud";
import Edit from "./Interface/Edit";
import Error from "./Interface/Error";
import Filter from "./Interface/Filter";
import Grid from "./Interface/Grid";
import Heart from "./Interface/Heart";
import Home from "./Interface/Home";
import Info from "./Interface/Info";
import Message from "./Interface/Message";
import Settings from "./Interface/Settings";
import Share from "./Interface/Share";
import Star from "./Interface/Star";
import Success from "./Interface/Success";
import User from "./Interface/User";
import Warning from "./Interface/Warning";

export interface SvgProps {
  fill: Colors;
  outline: boolean;
}

export interface IconComponentProps {
  name: InterfaceIconTypes | UiIconTypes;
  fill?: Colors;
  outline?: boolean;
}

export const Icon: React.FC<IconComponentProps> = ({
  name,
  fill = "black",
  outline = false
}) => {
  switch (name) {
    /* Common Icons ---------------------------------------------------------------------------- */
    case "ArrowDown":
      return <ArrowDown fill={fill} outline={outline} />;
    case "ArrowLeft":
      return <ArrowLeft fill={fill} outline={outline} />;
    case "ArrowRight":
      return <ArrowRight fill={fill} outline={outline} />;
    case "ArrowUp":
      return <ArrowUp fill={fill} outline={outline} />;
    case "Back":
      return <Back fill={fill} outline={outline} />;
    case "ChevronDown":
      return <ChevronDown fill={fill} outline={outline} />;
    case "ChevronLeft":
      return <ChevronLeft fill={fill} outline={outline} />;
    case "ChevronRight":
      return <ChevronRight fill={fill} outline={outline} />;
    case "Close":
      return <Close fill={fill} outline={outline} />;
    case "List":
      return <List fill={fill} outline={outline} />;
    case "Menu":
      return <Menu fill={fill} outline={outline} />;
    case "MenuAlternative":
      return <MenuAlternative fill={fill} outline={outline} />;
    case "MenuHorizontal":
      return <MenuHorizontal fill={fill} outline={outline} />;
    case "MenuVertical":
      return <MenuVertical fill={fill} outline={outline} />;
    case "Minus":
      return <Minus fill={fill} outline={outline} />;
    case "Ok":
      return <Ok fill={fill} outline={outline} />;
    case "Paragraph":
      return <Paragraph fill={fill} outline={outline} />;
    case "Plus":
      return <Plus fill={fill} outline={outline} />;
    case "Refresh":
      return <Refresh fill={fill} outline={outline} />;
    case "Rotate":
      return <Rotate fill={fill} outline={outline} />;
    case "Search":
      return <Search fill={fill} outline={outline} />;
    case "Sort":
      return <Sort fill={fill} outline={outline} />;
    /* Interface Icons ------------------------------------------------------------------------- */
    case "Bookmark":
      return <Bookmark fill={fill} outline={outline} />;
    case "Calendar":
      return <Calendar fill={fill} outline={outline} />;
    case "Call":
      return <Call fill={fill} outline={outline} />;
    case "Cart":
      return <Cart fill={fill} outline={outline} />;
    case "Chart":
      return <Chart fill={fill} outline={outline} />;
    case "Cloud":
      return <Cloud fill={fill} outline={outline} />;
    case "Edit":
      return <Edit fill={fill} outline={outline} />;
    case "Error":
      return <Error fill={fill} outline={outline} />;
    case "Filter":
      return <Filter fill={fill} outline={outline} />;
    case "Grid":
      return <Grid fill={fill} outline={outline} />;
    case "Heart":
      return <Heart fill={fill} outline={outline} />;
    case "Home":
      return <Home fill={fill} outline={outline} />;
    case "Info":
      return <Info fill={fill} outline={outline} />;
    case "Message":
      return <Message fill={fill} outline={outline} />;
    case "Settings":
      return <Settings fill={fill} outline={outline} />;
    case "Share":
      return <Share fill={fill} outline={outline} />;
    case "Star":
      return <Star fill={fill} outline={outline} />;
    case "Success":
      return <Success fill={fill} outline={outline} />;
    case "User":
      return <User fill={fill} outline={outline} />;
    case "Warning":
      return <Warning fill={fill} outline={outline} />;
    default:
      return <Ok fill={fill} outline={outline} />;
  }
};
