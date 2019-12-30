import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgOk: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={15} {...props}>
      <path
        d="M7.071 11.314L18.385 0l1.414 1.414L7.071 14.142 0 7.072l1.414-1.415z"
        fill={ColorMap[props.fill]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgOk;
