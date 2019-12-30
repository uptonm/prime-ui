import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgSearch: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={20} {...props}>
      <path
        d="M7.5 0a7.5 7.5 0 015.963 12.05l6.435 6.434-1.414 1.414-6.435-6.435A7.5 7.5 0 117.5 0zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
        fill={ColorMap[props.fill]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgSearch;
