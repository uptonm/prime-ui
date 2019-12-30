import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgInfo: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={20} {...props}>
      {!props.outline ? (
        <path
          d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM9 9v6h2V9H9zm1-2a1 1 0 100-2 1 1 0 000 2z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zM9 9h2v6H9V9zm1-2a1 1 0 100-2 1 1 0 000 2z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgInfo;
