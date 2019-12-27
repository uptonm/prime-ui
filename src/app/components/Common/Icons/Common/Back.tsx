import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { IconProps } from "../";

const SvgBack: React.FC<IconProps> = props => {
  return (
    <svg width={12} height={20} {...props}>
      <path
        d="M2.828 9.9l8.486 8.485-1.415 1.414L0 9.899 9.9 0l1.414 1.414z"
        fill={ColorMap[props.fill || "black"]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgBack;
