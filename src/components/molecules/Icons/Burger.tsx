import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const Burger = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 30 30" {...rest}>
        <rect x="0.417969" y="0.416016" width="29.1667" height="4.16667" rx="2.08333" fill="#C1C3D2"/>
        <rect x="0.417969" y="12.916" width="29.1667" height="4.16667" rx="2.08333" fill="#C1C3D2"/>
        <rect x="0.417969" y="25.416" width="29.1667" height="4.16667" rx="2.08334" fill="#C1C3D2"/>
    </Icon>
);

export default Burger;
