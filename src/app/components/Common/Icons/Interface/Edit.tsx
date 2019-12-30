import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgEdit: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={19} {...props}>
      {!props.outline ? (
        <path
          d="M11.536 3.343l-3.89 3.89-1.414-1.415L11.536.515 14.01 2.99l1.768-1.768a2 2 0 112.829 2.828L8 14.657l-2.828-2.829 7.424-7.424-1.06-1.06zm-7.779 9.9l2.829 2.828-2.122 2.121L.93 18.9l.707-3.535 2.121-2.121z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M10.548.484l2.475 2.475 1.768-1.768a2 2 0 012.828 0l1.414 1.415a2 2 0 010 2.828L4.891 19.576H.65v-4.242l10.96-10.96-1.06-1.061-3.89 3.889-1.414-1.414L10.548.484zM6.66 14.98l7.778-7.778-1.414-1.414-7.778 7.778 1.414 1.414zm-1.414 1.414L3.83 14.98l-1.182 1.182v1.414h1.414l1.182-1.182zM15.85 5.788L17.62 4.02l-1.414-1.414-1.768 1.767 1.414 1.415z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgEdit;
