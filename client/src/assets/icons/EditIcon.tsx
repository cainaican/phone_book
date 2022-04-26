import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

type SvgIconProps = {
  icon: {width: number, height: number};
};

export const EditIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (props) => {
    const { icon } = props;

    return (
        <SvgIcon  viewBox={`0 0 ${icon.width} ${icon.height}`}>
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </SvgIcon>
    );
  },
);