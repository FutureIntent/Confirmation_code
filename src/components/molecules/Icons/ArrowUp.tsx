import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const ArrowUp = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 13 26" {...rest}>
        <path
            d="M11.5859 5.8L6.78594 1L1.98594 5.79999"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M6.78516 1L6.78515 25" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </Icon>
);

export default ArrowUp;
