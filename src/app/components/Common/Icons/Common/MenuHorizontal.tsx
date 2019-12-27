import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { IconProps } from "../";

const SvgMenuHorizontal: React.FC<IconProps> = props => {
  return (
    <svg width={20} height={4} {...props}>
      <path
        d="M2 4a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4z"
        fill={ColorMap[props.fill || "black"]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgMenuHorizontal;
