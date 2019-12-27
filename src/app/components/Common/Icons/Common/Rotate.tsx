import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { IconProps } from "../";

const SvgRotate: React.FC<IconProps> = props => {
  return (
    <svg width={19} height={18} {...props}>
      <path
        d="M14.31 6.7H7.5A5.5 5.5 0 002 12.2v5.5H0v-5.5a7.5 7.5 0 017.5-7.5h6.786L11 1.414 12.414 0l5.712 5.712-5.712 5.711L11 10.01 14.31 6.7z"
        fill={ColorMap[props.fill || "black"]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgRotate;
