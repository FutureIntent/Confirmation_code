import styled from 'styled-components';

import { Size } from '@components/atoms/Icon/Icon';
import Typography from '@components/atoms/Typography';

import Telegram from '@components/molecules/Icons/Telegram';

const StyledLink = styled.a`
    align-items: center;
    display: flex;
    margin-left: 12px;
`;

const TelegramInfo = ({
    iconSize = 'large',
    isWhiteBg = false,
}: {
    iconSize?: Size;
    isWhiteBg?: boolean;
}) => (
    <>
        <div>
            <Telegram size={iconSize} />
        </div>
        <StyledLink href="https://t.me/surfinite">
            <Typography
                variant="caption"
                color={{
                    light: isWhiteBg ? 'light.brandBlack' : 'light.grey',
                    dark: 'dark.lightGrey',
                }}
            >
                @surfinite
            </Typography>
        </StyledLink>
    </>
);

export default TelegramInfo;
