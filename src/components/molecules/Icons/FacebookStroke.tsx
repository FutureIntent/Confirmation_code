import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const FacebookStroke = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 13 24" {...rest}>
        <path d="M3.46368 24H8.30733V11.9035H11.6651L12.0261 7.8405H8.30733V5.532C8.30733 4.57502 8.50041 4.19727 9.42381 4.19727H12.0513V0H8.69349C5.08383 0 3.46368 1.59495 3.46368 4.63378V7.87409H0.945312V11.9874H3.46368V24Z" fill="#5A7CFF"/>
    </Icon>
);

export default FacebookStroke;
