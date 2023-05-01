import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const Keylock = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 16 20" {...rest}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1942 4C12.0824 1.77327 10.1127 0 7.69922 0C5.28577 0 3.31608 1.77327 3.20423 4H3.19922V9.2H12.1992V4H12.1942ZM10.9135 4.1279L10.9099 4.0562C10.8301 2.46663 9.42275 1.2 7.69922 1.2C5.97569 1.2 4.56838 2.46663 4.48853 4.0562L4.48493 4.1279V8H10.9135V4.1279Z"
            fill="#486DFF"
        />
        <path
            d="M0.199219 8C0.199219 7.33726 0.774853 6.8 1.48493 6.8H13.9135C14.6236 6.8 15.1992 7.33726 15.1992 8V18.8C15.1992 19.4627 14.6236 20 13.9135 20H1.48493C0.774853 20 0.199219 19.4627 0.199219 18.8V8Z"
            fill="#486DFF"
        />
    </Icon>
);

export default Keylock;
