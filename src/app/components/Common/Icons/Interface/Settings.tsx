import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgSettings: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={18} {...props}>
      {!props.outline ? (
        <path
          d="M15 .34L20 9l-5 8.66H5L0 9 5 .34h10zM10 5a4 4 0 100 8 4 4 0 000-8z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M15 .34L20 9l-5 8.66H5L0 9 5 .34h10zm-1.155 2h-7.69L2.309 9l3.846 6.66h7.69L17.691 9l-3.846-6.66zM10 5a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgSettings;
