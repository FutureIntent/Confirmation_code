import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const TwitterStroke = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 24 24" {...rest}>
        <path d="M21.5,7.1c0,0.2,0,0.4,0,0.6c0,6.5-5,14-14,14v0c-2.7,0-5.3-0.8-7.5-2.2c0.4,0,0.8,0.1,1.2,0.1c2.2,0,4.4-0.7,6.1-2.1
	c-2.1,0-4-1.4-4.6-3.4c0.7,0.1,1.5,0.1,2.2-0.1C2.6,13.5,1,11.5,1,9.2V9.1c0.7,0.4,1.5,0.6,2.2,0.6C1,8.3,0.4,5.4,1.7,3.1
	c2.5,3.1,6.2,4.9,10.1,5.1c-0.4-1.7,0.1-3.5,1.4-4.7c2-1.9,5.1-1.8,7,0.2c1.1-0.2,2.2-0.6,3.1-1.2c-0.4,1.1-1.1,2.1-2.2,2.7
	c1-0.1,1.9-0.4,2.8-0.8C23.3,5.5,22.5,6.4,21.5,7.1L21.5,7.1z" fill="#5A7CFF"/>
    </Icon>
);

export default TwitterStroke;
