import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgParagraph: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={14} {...props}>
      <path
        d="M20 6v2H0V6h20zm0-6v2H0V0h20zM10 12v2H0v-2h10z"
        fill={ColorMap[props.fill]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgParagraph;
