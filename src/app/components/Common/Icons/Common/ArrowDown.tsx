import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgArrowDown: React.FC<SvgProps> = props => {
  return (
    <svg width={16} height={20} {...props}>
      <path
        d="M9.014 16.174l5.586-5.586 1.414 1.415-8.011 8.011-8.012-8.011 1.414-1.415 5.61 5.61V.009h2z"
        fill={ColorMap[props.fill]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgArrowDown;
