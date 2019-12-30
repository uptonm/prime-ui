import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgChart: React.FC<SvgProps> = props => {
  return (
    <svg width={19} height={20} {...props}>
      {!props.outline ? (
        <path
          d="M0 12h5v8H0v-8zM7 0h5v20H7V0zm7 6h5v14h-5V6z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M2 14v4h2v-4H2zm-2-2h6v8H0v-8zM9 2v16h2V2H9zM7 0h6v20H7V0zm9 8v10h2V8h-2zm-2-2h6v14h-6V6z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgChart;
