import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgMenuAlternative: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={14} {...props}>
      <path
        d="M10 6v2H0V6h10zm10-6v2H0V0h20zm0 12v2H0v-2h20z"
        fill={ColorMap[props.fill]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgMenuAlternative;
