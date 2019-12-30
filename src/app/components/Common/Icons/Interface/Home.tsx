import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgHome: React.FC<SvgProps> = props => {
  return (
    <svg width={22} height={21} {...props}>
      {!props.outline ? (
        <path
          d="M19 11.414V21h-6.005v-6H8.98v6H3v-9.586l-1.293 1.293-1.414-1.414L11 .586l10.707 10.707-1.414 1.414L19 11.414z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M5 9.414V19h2.979v-5h6.016v5H17V9.414l-6-6-6 6zm-2 2l-1.293 1.293-1.414-1.414L11 .586l10.707 10.707-1.414 1.414L19 11.414V21h-7.005v-5H9.98v5H3v-9.586z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgHome;
