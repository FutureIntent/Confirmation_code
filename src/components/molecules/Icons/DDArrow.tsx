import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const DDArrow = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 14 7" {...rest}>
        <path d="M7 6.75L0.937822 0.375L13.0622 0.374999L7 6.75Z" fill="white" />
    </Icon>
);

export default DDArrow;
