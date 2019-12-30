import React from "react";
import { ColorMap } from "../../../../models/ui/colors";
import { SvgProps } from "..";

const SvgStar: React.FC<SvgProps> = props => {
  return (
    <svg width={22} height={20} {...props}>
      {!props.outline ? (
        <path
          d="M11 15.95L4.534 19.9l1.758-7.37L.538 7.6l7.552-.605L11 0l2.91 6.995 7.552.606-5.754 4.929 1.758 7.37z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      ) : (
        <path
          d="M11 13.606l3.405 2.08-.926-3.88 3.03-2.596-3.977-.319L11 5.208 9.468 8.89l-3.977.32 3.03 2.594-.926 3.88L11 13.607zm0 2.344L4.534 19.9l1.758-7.37L.538 7.6l7.552-.605L11 0l2.91 6.995 7.552.606-5.754 4.929 1.758 7.37L11 15.95z"
          fill={ColorMap[props.fill]}
          fillRule="evenodd"
        />
      )}
    </svg>
  );
};

export default SvgStar;
