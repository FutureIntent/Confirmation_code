import { ReactElement } from 'react';

import Icon, { IconProps } from '@components/atoms/Icon';

const YoutubeStroke = ({ size, ...rest }: IconProps): ReactElement => (
    <Icon size={size} viewBox="0 0 25 18" {...rest}>
        <path d="M23.9879 3.18332C23.8518 2.67509 23.5854 2.21118 23.2151 1.83749C22.8447 1.4638 22.3832 1.19327 21.8762 1.05266C19.9795 0.546867 12.5 0.546875 12.5 0.546875C12.5 0.546875 4.99525 0.546867 3.12381 1.05266C2.61477 1.19057 2.15104 1.46009 1.77923 1.83411C1.40742 2.20814 1.14067 2.67348 1.0058 3.18332C0.500002 5.08006 0.5 8.99998 0.5 8.99998C0.5 8.99998 0.500002 12.9325 1.0058 14.8166C1.14067 15.3265 1.40742 15.7918 1.77923 16.1658C2.15104 16.5399 2.61477 16.8094 3.12381 16.9473C5.02054 17.4531 12.5 17.4531 12.5 17.4531C12.5 17.4531 20.0047 17.4531 21.8762 16.9473C22.3855 16.8086 22.8496 16.5389 23.2224 16.1651C23.5951 15.7913 23.8634 15.3264 24.0005 14.8166C24.5 12.9199 24.5 8.99998 24.5 8.99998C24.5 8.99998 24.4874 5.06741 23.9879 3.18332ZM10.0342 12.5658V5.42147L16.3061 8.98734L10.0342 12.5658Z" fill="#5A7CFF"/>
    </Icon>
);

export default YoutubeStroke;
