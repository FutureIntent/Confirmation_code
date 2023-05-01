import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import LogoText from '@components/molecules/Icons/LogoText';

const RegistrationLogoText = styled(LogoText)`
    margin-left: 15px;
    width: 100%;

    ${mediaQueries.tabletL} {
        display: block;
        max-width: 99px;
    }
`;

export default RegistrationLogoText;
