import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgSuccess: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={20} {...props}>
      {!props.outline ? (
        <path
          d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm-2.464-7.636l-2.122-2.121L4 11.657l3.536 3.535 7.778-7.778L13.899 6l-6.363 6.364z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm-2.464-7.636L13.899 6l1.415 1.414-7.778 7.778L4 11.657l1.414-1.414 2.122 2.121z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgSuccess;
