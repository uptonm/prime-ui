import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { IconProps } from "../";

const SvgList: React.FC<IconProps> = props => {
  return (
    <svg width={20} height={14} {...props}>
      <path
        d="M20 0v2H4V0h16zm0 6v2H4V6h16zm0 6v2H4v-2h16zM2 0v2H0V0h2zm0 6v2H0V6h2zm0 6v2H0v-2h2z"
        fill={ColorMap[props.fill || "black"]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgList;
