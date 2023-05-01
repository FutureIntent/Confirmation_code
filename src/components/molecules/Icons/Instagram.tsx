import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const Instagram = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 40 41" {...rest}>
        <path
            d="M36 0.367188H4C1.79086 0.367188 0 2.15805 0 4.36719V36.3672C0 38.5764 1.79086 40.3672 4 40.3672H36C38.2091 40.3672 40 38.5764 40 36.3672V4.36719C40 2.15805 38.2091 0.367188 36 0.367188Z"
            fill="#7E809B"
        />
        <path
            d="M20.0406 14.9992C18.9467 14.9992 17.8774 15.3236 16.9678 15.9313C16.0582 16.5391 15.3493 17.4029 14.9307 18.4136C14.5121 19.4242 14.4025 20.5363 14.6159 21.6092C14.8294 22.6821 15.3561 23.6677 16.1297 24.4412C16.9032 25.2147 17.8887 25.7415 18.9616 25.9549C20.0345 26.1683 21.1466 26.0588 22.1573 25.6402C23.1679 25.2215 24.0317 24.5126 24.6395 23.6031C25.2472 22.6935 25.5716 21.6241 25.5716 20.5302C25.57 19.0638 24.9868 17.6579 23.9499 16.6209C22.913 15.584 21.5071 15.0008 20.0406 14.9992ZM20.0406 14.9992C18.9467 14.9992 17.8774 15.3236 16.9678 15.9313C16.0582 16.5391 15.3493 17.4029 14.9307 18.4136C14.5121 19.4242 14.4025 20.5363 14.6159 21.6092C14.8294 22.6821 15.3561 23.6677 16.1297 24.4412C16.9032 25.2147 17.8887 25.7415 18.9616 25.9549C20.0345 26.1683 21.1466 26.0588 22.1573 25.6402C23.1679 25.2215 24.0317 24.5126 24.6395 23.6031C25.2472 22.6935 25.5716 21.6241 25.5716 20.5302C25.57 19.0638 24.9868 17.6579 23.9499 16.6209C22.913 15.584 21.5071 15.0008 20.0406 14.9992ZM29.5756 6.99219H10.5057C9.45789 6.99245 8.45309 7.4088 7.7122 8.1497C6.9713 8.8906 6.55495 9.8954 6.55469 10.9432V30.0132C6.55495 31.061 6.9713 32.0658 7.7122 32.8067C8.45309 33.5476 9.45789 33.9639 10.5057 33.9642H29.5756C30.6234 33.9639 31.6282 33.5476 32.3691 32.8067C33.11 32.0658 33.5263 31.061 33.5266 30.0132V10.9432C33.5263 9.8954 33.11 8.8906 32.3691 8.1497C31.6282 7.4088 30.6234 6.99245 29.5756 6.99219V6.99219ZM20.0406 27.6422C18.6341 27.6418 17.2592 27.2243 16.0899 26.4426C14.9206 25.6608 14.0093 24.5499 13.4714 23.2502C12.9334 21.9506 12.7929 20.5206 13.0676 19.1411C13.3424 17.7616 14.02 16.4946 15.0148 15.5002C16.0096 14.5058 17.2769 13.8287 18.6565 13.5546C20.0361 13.2804 21.466 13.4215 22.7654 13.96C24.0649 14.4985 25.1754 15.4103 25.9567 16.5799C26.7379 17.7496 27.1548 19.1246 27.1546 20.5312C27.1517 22.4168 26.4012 24.2243 25.0676 25.5573C23.734 26.8903 21.9262 27.6401 20.0406 27.6422ZM28.7326 13.4192C28.4201 13.4192 28.1147 13.3265 27.8548 13.1529C27.595 12.9793 27.3925 12.7325 27.2729 12.4438C27.1533 12.1551 27.122 11.8374 27.183 11.5309C27.244 11.2245 27.3944 10.9429 27.6154 10.722C27.8364 10.501 28.1179 10.3505 28.4244 10.2895C28.7309 10.2286 29.0486 10.2599 29.3373 10.3795C29.626 10.499 29.8727 10.7016 30.0463 10.9614C30.22 11.2212 30.3126 11.5267 30.3126 11.8392C30.3113 12.2578 30.1444 12.6589 29.8484 12.955C29.5524 13.251 29.1513 13.4179 28.7326 13.4192ZM20.0406 14.9992C18.9467 14.9992 17.8774 15.3236 16.9678 15.9313C16.0582 16.5391 15.3493 17.4029 14.9307 18.4136C14.5121 19.4242 14.4025 20.5363 14.6159 21.6092C14.8294 22.6821 15.3561 23.6677 16.1297 24.4412C16.9032 25.2147 17.8887 25.7415 18.9616 25.9549C20.0345 26.1683 21.1466 26.0588 22.1573 25.6402C23.1679 25.2215 24.0317 24.5126 24.6395 23.6031C25.2472 22.6935 25.5716 21.6241 25.5716 20.5302C25.57 19.0638 24.9868 17.6579 23.9499 16.6209C22.913 15.584 21.5071 15.0008 20.0406 14.9992ZM20.0406 14.9992C18.9467 14.9992 17.8774 15.3236 16.9678 15.9313C16.0582 16.5391 15.3493 17.4029 14.9307 18.4136C14.5121 19.4242 14.4025 20.5363 14.6159 21.6092C14.8294 22.6821 15.3561 23.6677 16.1297 24.4412C16.9032 25.2147 17.8887 25.7415 18.9616 25.9549C20.0345 26.1683 21.1466 26.0588 22.1573 25.6402C23.1679 25.2215 24.0317 24.5126 24.6395 23.6031C25.2472 22.6935 25.5716 21.6241 25.5716 20.5302C25.57 19.0638 24.9868 17.6579 23.9499 16.6209C22.913 15.584 21.5071 15.0008 20.0406 14.9992ZM20.0406 14.9992C18.9467 14.9992 17.8774 15.3236 16.9678 15.9313C16.0582 16.5391 15.3493 17.4029 14.9307 18.4136C14.5121 19.4242 14.4025 20.5363 14.6159 21.6092C14.8294 22.6821 15.3561 23.6677 16.1297 24.4412C16.9032 25.2147 17.8887 25.7415 18.9616 25.9549C20.0345 26.1683 21.1466 26.0588 22.1573 25.6402C23.1679 25.2215 24.0317 24.5126 24.6395 23.6031C25.2472 22.6935 25.5716 21.6241 25.5716 20.5302C25.57 19.0638 24.9868 17.6579 23.9499 16.6209C22.913 15.584 21.5071 15.0008 20.0406 14.9992Z"
            fill="#262D47"
        />
    </Icon>
);

export default Instagram;
