import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { IconProps } from "../";

const SvgMinus: React.FC<IconProps> = props => {
  return (
    <svg width={20} height={2} {...props}>
      <path
        d="M20 0v2H0V0z"
        fill={ColorMap[props.fill || "black"]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgMinus;
