import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgMinus: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={2} {...props}>
      <path d="M20 0v2H0V0z" fill={ColorMap[props.fill]} fillRule="evenodd" />
    </svg>
  );
};

export default SvgMinus;
