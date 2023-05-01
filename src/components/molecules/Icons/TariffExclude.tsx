import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const TariffExclude = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 25 24" {...rest}>
        <path d="M0.5 4C0.5 1.79086 2.29086 0 4.5 0H20.5C22.7091 0 24.5 1.79086 24.5 4V20C24.5 22.2091 22.7091 24 20.5 24H4.5C2.29086 24 0.5 22.2091 0.5 20V4Z" fill="#F0F0FA"/>
        <path d="M6.5 12H18.5" stroke="#7E809B" strokeWidth="3"/>
    </Icon>
);

export default TariffExclude;
