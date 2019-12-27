import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { IconProps } from "../";

const SvgChevronLeft: React.FC<IconProps> = props => {
  return (
    <svg width={8} height={12} {...props}>
      <path
        d="M7.568 1.734L3.27 6.032l4.298 4.297-1.415 1.414L.442 6.032 6.153.32z"
        fill={ColorMap[props.fill || "black"]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgChevronLeft;
