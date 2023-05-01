import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const CloseBtn = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 24 24" {...rest}>
        <rect width="29.1667" height="4.16667" rx="2.08334" transform="matrix(0.707107 -0.707106 0.707107 0.707106 0 20.6289)" fill="#486DFF"/>
        <rect width="29.1667" height="4.16667" rx="2.08334" transform="matrix(-0.707107 -0.707106 0.707107 -0.707106 20.625 23.5703)" fill="#486DFF"/>
    </Icon>
);

export default CloseBtn;
