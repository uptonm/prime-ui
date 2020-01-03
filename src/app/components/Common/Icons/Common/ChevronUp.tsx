import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgChevronUp: React.FC<SvgProps> = props => {
  return (
    <svg width={12} height={8} {...props}>
      <path
        d="M1.707 7.626L.293 6.212 6.005.5l5.711 5.712-1.414 1.414-4.297-4.298z"
        fill={ColorMap[props.fill]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgChevronUp;
