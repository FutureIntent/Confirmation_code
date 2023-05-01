import styled from 'styled-components';

import { Size } from '@components/atoms/Icon/Icon';
import Typography from '@components/atoms/Typography';

import Mail from '@components/molecules/Icons/Mail';
import {eMail} from "@utils/configData";

const StyledLink = styled.a`
    align-items: center;
    display: flex;
    margin-left: 12px;
`;

const MailInfo = ({
    iconSize = 'large',
    isWhiteBg = false,
}: {
    iconSize?: Size;
    isWhiteBg?: boolean;
}) => (
    <>
        <div>
            <Mail size={iconSize} />
        </div>
        <StyledLink href={`mailto:${eMail}`}>
            <Typography
                variant="caption"
                color={{
                    light: isWhiteBg ? 'light.brandBlack' : 'light.grey',
                    dark: 'dark.lightGrey',
                }}
            >
                {eMail}
            </Typography>
        </StyledLink>
    </>
);

export default MailInfo;
