import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgCall: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={20} {...props}>
      {!props.outline ? (
        <path
          d="M15.223 19.853C6.633 18.737 0 11.393 0 2.5V1a1 1 0 011-1h4.82a1 1 0 01.986 1.164L5.833 7H3.712A14.536 14.536 0 0013 16.288v-2.121l5.836-.973A1 1 0 0120 14.18V19a1 1 0 01-1 1h-1.533c-.789 0-1.537-.049-2.244-.147z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M2 2V3.25c0 7.432 5.528 13.677 12.83 14.626l.008.001c.59.082 1.217.123 1.882.123H18v-4.12l-4.3.717v2.44l-1.31-.427a14.083 14.083 0 01-9-9L2.963 6.3h2.44L6.12 2H2zM0 3.249V1.9C0 .85.85 0 1.9 0h4.338a1.9 1.9 0 011.874 2.212L7.097 8.3H5.806a12.101 12.101 0 005.894 5.894v-1.291l6.088-1.015A1.9 1.9 0 0120 13.762V18.1a1.9 1.9 0 01-1.9 1.9h-1.38c-.753 0-1.47-.047-2.152-.141C6.274 18.779 0 11.689 0 3.249z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgCall;
