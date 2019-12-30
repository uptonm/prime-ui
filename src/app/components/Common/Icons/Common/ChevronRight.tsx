import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgChevronUp: React.FC<SvgProps> = props => {
  return (
    <svg width={8} height={12} {...props}>
      <path
        d="M.442 1.734L1.856.32l5.712 5.712-5.712 5.711L.442 10.33l4.297-4.297z"
        fill={ColorMap[props.fill]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgChevronUp;
