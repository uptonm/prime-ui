import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgMessage: React.FC<SvgProps> = props => {
  return (
    <svg width={20} height={16} {...props}>
      {!props.outline ? (
        <path
          d="M18.657 15.657l-4.863-1.216c-1.17.36-2.45.559-3.794.559-5.523 0-10-3.358-10-7.5C0 3.358 4.477 0 10 0s10 3.358 10 7.5c0 1.608-.675 3.097-1.823 4.318l.48 3.839z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M16.076 11.133l.644-.685C17.564 9.551 18 8.538 18 7.5 18 4.608 14.523 2 10 2S2 4.608 2 7.5 5.477 13 10 13c1.12 0 2.204-.162 3.206-.47l.533-.164 2.571.643-.234-1.876zm2.58 4.524l-4.862-1.216c-1.17.36-2.45.559-3.794.559-5.523 0-10-3.358-10-7.5C0 3.358 4.477 0 10 0s10 3.358 10 7.5c0 1.608-.675 3.097-1.823 4.318l.48 3.839z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgMessage;
