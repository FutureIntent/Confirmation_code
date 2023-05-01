import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const Telegram = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 30 30" {...rest}>
        <g clipPath="url(#clip0_10_256)">
            <path
                d="M29.9491 4.09377L24.4854 26.6128C24.2284 27.6733 23.0392 28.2197 22.0642 27.7161L15.1539 24.1488L11.8864 29.4946C10.9973 30.9516 8.74759 30.3196 8.74759 28.616V22.6594C8.74759 22.1988 8.94033 21.7595 9.27248 21.4382L22.7392 8.58239C22.7284 8.4217 22.557 8.28252 22.3858 8.40017L6.31606 19.5847L0.916707 16.7993C-0.34732 16.1457 -0.293755 14.3137 1.01308 13.746L27.6355 2.14401C28.9103 1.58683 30.2818 2.73323 29.9496 4.09368L29.9491 4.09377Z"
                fill="#5A7CFF"
            />
        </g>
        <defs>
            <clipPath id="clip0_10_256">
                <rect width="30" height="30" fill="white" />
            </clipPath>
        </defs>
    </Icon>
);

export default Telegram;
