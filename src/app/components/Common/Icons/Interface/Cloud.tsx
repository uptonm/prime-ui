import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgCloud: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={14} {...props}>
      {!props.outline ? (
        <path
          d="M4 13.9a5.002 5.002 0 01-.42-9.696A7.002 7.002 0 0117 7.035a3.5 3.5 0 010 6.93L4 13.9z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M16.831 11.964a1.502 1.502 0 00-.114-2.949L14.99 8.77 15 7.026V7a5 5 0 00-9.586-1.996l-.373.854-.894.264a3.002 3.002 0 00.084 5.78l12.6.062zM4 13.9a5.002 5.002 0 01-.42-9.696A7.002 7.002 0 0117 7.035a3.5 3.5 0 010 6.93L4 13.9z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgCloud;
