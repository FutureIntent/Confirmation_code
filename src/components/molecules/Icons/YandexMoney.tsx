import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const YandexMoney = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 31 30" {...rest}>
        <g clipPath="url(#clip0_1313_18460)">
            <path d="M19.8341 4.56753C18.4475 4.54838 17.0707 4.80343 15.783 5.31802C14.4953 5.83262 13.3219 6.59662 12.3304 7.56612C11.3389 8.53562 10.5487 9.69151 10.0053 10.9674C9.46196 12.2432 9.17605 13.6138 9.16406 15.0005C9.22446 17.7903 10.3751 20.4454 12.3694 22.397C14.3638 24.3487 17.0432 25.4416 19.8336 25.4416C22.624 25.4416 25.3034 24.3487 27.2977 22.397C29.292 20.4454 30.4427 17.7903 30.5031 15.0005C30.4911 13.6139 30.2052 12.2434 29.6619 10.9676C29.1186 9.69181 28.3285 8.53597 27.3371 7.56648C26.3456 6.59699 25.1724 5.83297 23.8848 5.31831C22.5972 4.80366 21.2206 4.54851 19.8341 4.56753ZM19.8341 18.8555C18.7933 18.8652 17.79 18.4673 17.0388 17.7469C16.2875 17.0265 15.848 16.0408 15.8141 15.0005C15.8574 13.9633 16.2999 12.9828 17.0491 12.2642C17.7984 11.5456 18.7964 11.1443 19.8346 11.1443C20.8727 11.1443 21.8708 11.5456 22.62 12.2642C23.3693 12.9828 23.8118 13.9633 23.8551 15.0005C23.8211 16.041 23.3814 17.0269 22.63 17.7473C21.8785 18.4677 20.875 18.8655 19.8341 18.8555Z" fill="#8B3FFD"/>
            <path d="M9.159 7.66748V22.8595H5.371L0.5 7.66748H9.159Z" fill="#8B3FFD"/>
        </g>
        <defs>
            <clipPath id="clip0_1313_18460">
                <rect width="30" height="20.865" fill="white" transform="translate(0.5 4.5675)"/>
            </clipPath>
        </defs>
    </Icon>
);

export default YandexMoney;