import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const ChevronDown = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 23 12" {...rest}>
        <path
            d="M1.9375 1L11.9375 11L21.9375 1"
            stroke="#C1C3D2"
            strokeWidth="2"
            fill="transparent"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Icon>
);

export default ChevronDown;
