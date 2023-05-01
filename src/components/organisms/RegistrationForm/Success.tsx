import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import mediaQueries from '@theme/configs/mediaQueries';

import DownloadPlatform from '@components/atoms/DownloadPlatform';
import Typography from '@components/atoms/Typography';

import { platformDownloadData } from '@components/organisms/DownloadDemo/DownloadDemo';
import { useTranslation } from "react-i18next";

export const Wrapper = styled.div`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light
            ? theme.colors.commons.white
            : theme.colors.dark.eclipseMedium};
    display: block;
    height: 100%;
    padding: 30px;
    width: 100%;

    ${mediaQueries.laptopS} {
        width: 50%;
    }
`;

const Success = () => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Typography variant="h2" color={{ light: 'light.brandBlack', dark: 'dark.white' }}>
                {t('registrationSuccess')}
            </Typography>
            <Typography
                variant="paragraph"
                color={{ light: 'light.mediumGrey', dark: 'dark.lightGrey' }}
                mb={20}
                >
                {t('proceedToYourInbox')}
            </Typography>
            <Typography
                as="p"
                variant="accent"
                color={{ light: 'light.brandAccent', dark: 'dark.brandAccentNight' }}
                mb={11}
                >
                {t('downloadApp')}
            </Typography>

            <DownloadPlatform platform={platformDownloadData.windows} />
            <DownloadPlatform platform={platformDownloadData.osx} />
            <DownloadPlatform platform={platformDownloadData.linux} />
        </Wrapper>
    );
}

export default Success;
