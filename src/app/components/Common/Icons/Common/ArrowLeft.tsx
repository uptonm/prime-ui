import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { IconProps } from "../";

const SvgArrowLeft: React.FC<IconProps> = props => {
  return (
    <svg width={21} height={16} {...props}>
      <path
        d="M3.84 7h16.165v2H3.817l5.609 5.61-1.414 1.414L0 8.012 8.012 0l1.414 1.414z"
        fill={ColorMap[props.fill || "black"]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgArrowLeft;
