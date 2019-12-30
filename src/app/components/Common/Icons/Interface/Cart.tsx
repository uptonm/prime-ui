import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgCart: React.FC<SvgProps> = props => {
  return (
    <svg width={21} height={20} {...props}>
      {!props.outline ? (
        <path
          d="M6 14a3 3 0 110 6 3 3 0 010-6zm10 0a3 3 0 110 6 3 3 0 010-6zM4.834.018L5.644 4H21l-1.9 9H4L2 4h1.603L3.2 2.018H.995v-2h3.84z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M16 18a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 110-6 3 3 0 010 6zM6 18a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 110-6 3 3 0 010 6zM4.516 6.105L5.604 11h11.874l1.056-5H5.03l-.515.105zM3.604 4L3.2 2.018H.995v-2h3.84L5.644 4H21l-1.9 9H4L2 4h1.604z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgCart;
