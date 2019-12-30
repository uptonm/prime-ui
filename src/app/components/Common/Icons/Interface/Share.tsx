import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgShare: React.FC<SvgProps> = props => {
  return (
    <svg width={16} height={20} {...props}>
      {!props.outline ? (
        <path
          d="M7 11v4.013h1.996V11H7zm9 0v9H0v-9h7V4.333L3.707 7.626 2.293 6.212 8.005.5l5.711 5.712-1.414 1.414L9 4.324V11h7z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M2 18h12v-5H2v5zm-2-7h16v9H0v-9zm5 0v2h6v-2H5zm4-6.676V15H7V4.333L3.707 7.626 2.293 6.212 8.005.5l5.711 5.712-1.414 1.414L9 4.324z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgShare;
