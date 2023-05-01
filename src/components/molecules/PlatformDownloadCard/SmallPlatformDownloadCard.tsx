import { useTranslation } from "react-i18next";
import { IPlatformData, ISupportedPlatformOS } from "@components/organisms/DownloadDemo/DownloadDemo";
import Typography from "@components/atoms/Typography";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Button from "@components/atoms/Button";
import styled from "styled-components";
import { downloadFile } from "@utils/helpers";
import { ColorMode } from "@providers/ColorModeProvider/ColorModeContext";

const Card = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.eclipseMedium : theme.colors.commons.white};
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 30px 40px 60px;
`;

const StyledButton = styled(Button)`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    width: 100%;
`;

interface ISmallPlatformDownloadCardProps {
    platform: IPlatformData;
    poster: IGatsbyImageData;
    setPlatform: (platform: ISupportedPlatformOS) => void;
    platformKey: ISupportedPlatformOS;
}

const SmallPlatformDownloadCard = ({ platform, poster, setPlatform, platformKey }: ISmallPlatformDownloadCardProps) => {
    const { t } = useTranslation();
    const { icon, name, link } = platform;

    const handleDownload = () => {
        downloadFile(link);
        setPlatform(platformKey);
    }

    return (
        <Card>
            <Typography variant="h3" color={{ light: "light.brandBlack", dark: "dark.white" }} mb={10}>
                {name}
            </Typography>

            <GatsbyImage style={{ maxWidth: 190 }} alt={name} image={poster} />

            <StyledButton variant="secondary" btnSize="small" onClick={handleDownload}>
                {icon} <Typography variant="paragraph" color={{ light: 'light.brandAccent', dark: 'dark.brandAccentNight'}}>{t('download')}</Typography>
            </StyledButton>
        </Card>
    )
}

export default SmallPlatformDownloadCard;
