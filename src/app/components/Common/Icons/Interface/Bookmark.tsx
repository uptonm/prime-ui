import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgBookmark: React.FC<SvgProps> = props => {
  return (
    <svg width={16} height={20} {...props}>
      {!props.outline ? (
        <path
          d="M0 0h16v20l-8-4-8 4z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M14 2H2v14.764l6-3 6 3V2zM0 0h16v20l-8-4-8 4V0z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgBookmark;
