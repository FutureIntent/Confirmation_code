import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const Chat = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 15 15" {...rest}>
        <path
            d="M13.5 0H1.5C0.675 0 0.00749999 0.675 0.00749999 1.5L0 15L3 12H13.5C14.325 12 15 11.325 15 10.5V1.5C15 0.675 14.325 0 13.5 0ZM12 9H3V7.5H12V9ZM12 6.75H3V5.25H12V6.75ZM12 4.5H3V3H12V4.5Z"
            fill="#C1C3D2"
        />
    </Icon>
);

export default Chat;
