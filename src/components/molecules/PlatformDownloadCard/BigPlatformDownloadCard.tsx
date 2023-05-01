import { ISupportedPlatformOS, platformDownloadData } from "@components/organisms/DownloadDemo/DownloadDemo";
import Typography from "@components/atoms/Typography";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Box from "@components/atoms/Box";
import { cloneElement } from "react";
import { FONT_BOLD } from "@components/atoms/Typography/Typography";
import { downloadFile } from "@utils/helpers";
import mediaQueries from "@theme/configs/mediaQueries";
import { ColorMode } from "@providers/ColorModeProvider/ColorModeContext";

export interface IPlatformDownloadCardProps {
    platform: ISupportedPlatformOS;
    setPlatform: (platform: ISupportedPlatformOS) => void;
}

const BigDownloadButton = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.brandAccentNight : theme.colors.light.brandAccent};
    border-radius: ${({ theme }) => theme.space.xs};
    color: ${({ theme }) => theme.colors.commons.white};
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    padding: 10px 15px;
    white-space: nowrap;

    ${mediaQueries.tablet} {
        padding: 15px 30px;
    }

    &:hover {
        background-color: #294FE5;
        cursor: pointer;
    }
`;

const BigPlatformDownloadCard = ({ platform, setPlatform }: IPlatformDownloadCardProps) => {
    const { t } = useTranslation();
    const { icon, name, link, versions } = platformDownloadData[platform];

    const handleDownload = () => {
        downloadFile(link);
        setPlatform(platform);
    }

    return (
        <div>
            <Typography variant="h2" color={{ light: "light.brandBlack", dark: "dark.white" }} mb={20}>
                {name}
            </Typography>

            <BigDownloadButton onClick={handleDownload}>
                <div>
                    <Typography variant="accent" fontWeight={FONT_BOLD} color="commons.white" mb={5}>{name}</Typography>
                    <Typography variant="caption" color="light.grey">{versions}</Typography>
                </div>
                <Box>
                    {cloneElement(icon, { size: 'large' })}
                </Box>
            </BigDownloadButton>

            {/* <Typography variant="paragraph" color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }} my={10}> */}
            {/*    {t('alsoAvailable')}: */}
            {/* </Typography> */}

            {/* <Button variant="secondary" btnSize="small" p="5px 10px"> */}
            {/*    Windows 32 bit */}
            {/* </Button> */}

            <Typography variant="caption" mt={20} color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}>
                {t('youAccept')}
                <a href="/terms-of-use" target="_blank">{t('termsOfUse')}</a>,
                <a href="/eula" target="_blank">{t('userAgreement')}</a>,
                <a href="/privacy-policy" target="_blank">{t('privacyPolicy')}</a>.
            </Typography>
        </div>
    )
}

export default BigPlatformDownloadCard;
