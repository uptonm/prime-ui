import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgClose: React.FC<SvgProps> = props => {
  return (
    <svg width={16} height={16} {...props}>
      <path
        d="M9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222l1.414 1.414z"
        fill={ColorMap[props.fill]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgClose;
