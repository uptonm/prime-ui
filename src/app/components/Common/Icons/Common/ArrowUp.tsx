import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { IconProps } from "../";

const SvgArrowUp: React.FC<IconProps> = props => {
  return (
    <svg width={16} height={21} {...props}>
      <path
        d="M7 3.84L1.414 9.426 0 8.012 8.012 0l8.012 8.012-1.415 1.414L9 3.816v16.19H7z"
        fill={ColorMap[props.fill || "black"]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgArrowUp;
