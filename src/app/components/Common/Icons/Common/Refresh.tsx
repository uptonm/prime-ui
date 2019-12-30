import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgRefresh: React.FC<SvgProps> = props => {
  return (
    <svg width={19} height={19} {...props}>
      <path
        d="M5.15 3.528a7.006 7.006 0 001.62 12.485l.23.059v2.066c-3.992-.922-7-4.49-7-8.763A8.99 8.99 0 013.84 2H1.9V0h5.25v5.25h-2V3.527zM13 14.61a7.006 7.006 0 00-1.62-12.485l-.23-.059V0c3.991.921 7 4.49 7 8.762a8.99 8.99 0 01-3.842 7.376h1.941v2H11v-5.25h2v1.722z"
        fill={ColorMap[props.fill]}
        fillRule="evenodd"
      />
    </svg>
  );
};

export default SvgRefresh;
