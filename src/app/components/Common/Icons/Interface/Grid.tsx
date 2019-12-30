import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgGrid: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={20} {...props}>
      {!props.outline ? (
        <path
          d="M0 0h9v9H0V0zm0 11h9v9H0v-9zM11 0h9v9h-9V0zm0 11h9v9h-9v-9z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M2 2v5h5V2H2zM0 0h9v9H0V0zm2 13v5h5v-5H2zm-2-2h9v9H0v-9zm13-9v5h5V2h-5zm-2-2h9v9h-9V0zm2 13v5h5v-5h-5zm-2-2h9v9h-9v-9z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgGrid;
