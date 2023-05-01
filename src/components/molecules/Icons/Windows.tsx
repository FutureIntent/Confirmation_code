import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const Windows = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 15 15" {...rest}>
        <path d="M0 2.60175V7.28925H6.5625V1.78125L0 2.60175Z" fill="currentColor" />
        <path d="M7.5 1.66406V7.28906H15V0.726562L7.5 1.66406Z" fill="currentColor" />
        <path d="M7.5 8.22656V13.8516L15 14.7891V8.22656H7.5Z" fill="currentColor" />
        <path d="M0 8.22656V12.9141L6.5625 13.7346V8.22656H0Z" fill="currentColor" />
    </Icon>
);

export default Windows;
