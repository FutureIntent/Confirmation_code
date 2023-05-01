import { ReactElement } from 'react';

import { useColorMode } from '@hooks';

import Icon, { IconProps } from '@components/atoms/Icon';

const fillColor = {
    light: '#C1C3D2',
    dark: '#EAECF3',
};

const Moon = ({ size, ...rest }: IconProps): ReactElement => {
    const { colorMode } = useColorMode();

    return (
        <Icon size={size} viewBox="0 0 14 20" {...rest}>
            <path
                d="M6.45579 10.0007C6.45579 13.5707 4.25579 16.6207 1.14579 17.8707C0.255794 18.2307 0.395796 19.5607 1.3358 19.7707C2.4358 20.0107 3.60579 20.0707 4.81579 19.9107C9.3258 19.3107 12.9358 15.6007 13.4058 11.0807C14.0258 5.0707 9.33579 0.000702265 3.45579 0.000702779C2.72579 0.000702843 2.02579 0.0807028 1.33579 0.230703C0.385794 0.440702 0.235793 1.7607 1.13579 2.1307C2.70842 2.7593 4.05619 3.84543 5.00466 5.24852C5.95314 6.65162 6.45866 8.3071 6.45579 10.0007Z"
                fill={fillColor[colorMode]}
            />
        </Icon>
    );
};

export default Moon;
