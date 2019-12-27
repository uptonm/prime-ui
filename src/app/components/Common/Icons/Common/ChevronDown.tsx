import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { IconProps } from "../";

const SvgChevronDown: React.FC<IconProps> = props => {
  return (
    <svg width={12} height={8} {...props}>
      <path
        d="M1.707.4l4.298 4.298L10.302.4l1.414 1.414-5.711 5.712L.293 1.814z"
        fill={ColorMap[props.fill || "black"]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgChevronDown;
