import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgUser: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={20} {...props}>
      {!props.outline ? (
        <path
          d="M10 14c3.704 0 7.037.667 10 2v4H0v-4c2.963-1.333 6.296-2 10-2zm0-14a5 5 0 110 10 5 5 0 010-10z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M10 13c3.704 0 7.037.667 10 2v5H0v-5c2.963-1.333 6.296-2 10-2zm0 2c-2.939 0-5.602.448-8 1.34V18h16v-1.66c-2.398-.892-5.061-1.34-8-1.34zm0-15a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgUser;
