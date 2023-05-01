import { ReactElement } from 'react';

import { useColorMode } from '@hooks';

import Icon, { IconProps } from '@components/atoms/Icon';

const fillColor = {
    light: '#FFD34D',
    dark: '#576188',
};

const LightBulb = ({ size, ...rest }: IconProps): ReactElement => {
    const { colorMode } = useColorMode();

    return (
        <Icon size={size} viewBox="0 0 14 21" {...rest}>
            <path
                d="M4 19.0234C4 19.5234 4.4 20.0234 5 20.0234H9C9.6 20.0234 10 19.5234 10 19.0234V18.0234H4V19.0234ZM7 0.0234375C3.1 0.0234375 0 3.12344 0 7.02344C0 9.42344 1.2 11.5234 3 12.7234V15.0234C3 15.5234 3.4 16.0234 4 16.0234H10C10.6 16.0234 11 15.5234 11 15.0234V12.7234C12.8 11.4234 14 9.32344 14 7.02344C14 3.12344 10.9 0.0234375 7 0.0234375Z"
                fill={fillColor[colorMode]}
            />
        </Icon>
    );
};

export default LightBulb;
