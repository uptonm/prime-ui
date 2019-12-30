import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgCalendar: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={20} {...props}>
      {!props.outline ? (
        <path
          d="M20 2v18H0V2h5V1a1 1 0 112 0v1h6V1a1 1 0 012 0v1h5zM5 2v3a1 1 0 102 0V2H5zm8 0v3a1 1 0 002 0V2h-2zm5 7H2v9h16V9z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M2 7h16V4h-3v1a1 1 0 01-2 0V4H7v1a1 1 0 11-2 0V4H2v3zm18-5v18H0V2h5V1a1 1 0 112 0v1h6V1a1 1 0 012 0v1h5zm-2 7H2v9h16V9z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgCalendar;
