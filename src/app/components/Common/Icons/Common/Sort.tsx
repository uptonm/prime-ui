import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { IconProps } from "../";

const SvgSort: React.FC<IconProps> = props => {
  return (
    <svg width={20} height={14} {...props}>
      <path
        d="M15 6v2H0V6h15zm5-6v2H0V0h20zM5 12v2H0v-2h5z"
        fill={ColorMap[props.fill || "black"]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgSort;
