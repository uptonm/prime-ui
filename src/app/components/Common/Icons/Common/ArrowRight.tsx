import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgArrowRight: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={16} {...props}>
      <path
        d="M16.174 6.99l-5.586-5.585L12.003-.01l8.011 8.012-8.011 8.011-1.415-1.414 5.61-5.61H.009v-2z"
        fill={ColorMap[props.fill]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgArrowRight;
