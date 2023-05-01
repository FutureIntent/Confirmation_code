import GridParent from "@components/templates/GridParent";
import GridChild from "@components/templates/GridChild";
import Typography from "@components/atoms/Typography";
import { useTranslation } from "react-i18next";
import { graphql, useStaticQuery } from "gatsby";
import Box from "@components/atoms/Box";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import PageContainer from "@components/atoms/PageContainer";
import mediaQueries from "@theme/configs/mediaQueries";
import { ColorMode } from "@providers/ColorModeProvider/ColorModeContext";
import FloatingSquare from "@components/sections/DownloadPageSections/FloatingSquare";
import FloatingSquareWrapper from "@components/sections/DownloadPageSections/FloatingSquareWrapper";
import { ISupportedPlatformOS, platformDownloadData } from "@components/organisms/DownloadDemo/DownloadDemo";
import { FONT_BOLD } from "@components/atoms/Typography/Typography";

const query = graphql`
    query {
        poster: file(relativePath: { eq: "illustration/teamWork.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const Wrapper = styled.div`
    //min-height: 520px;
    align-items: flex-end;
    display: flex;
    justify-content: center;
    left: 0;
    overflow: hidden;
    padding-bottom: 80px;
    padding-top: 30px;
    position: relative;
    top: 0;
    width: 100%;

    ${mediaQueries.tablet} {
        padding-bottom: 120px;
        padding-top: 80px;
    }

    &:after {
        background: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.gradients.downloadsDark : theme.colors.gradients.downloads};
        content: '';
        height: 100%;
        left: 0;
        position:absolute;
        top:0;
        width: 100%;
        z-index: -2;

    }
`;

const StyledLink = styled.a`
    border-bottom: 1px solid ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.lightGrey : theme.colors.light.grey};
    color: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.lightGrey : theme.colors.light.grey};

    &:hover {
        color: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.dark.lightGrey : theme.colors.light.grey};
        cursor: pointer;
        font-weight: ${FONT_BOLD};
    }
`;

const HeroBanner = ({ platform }: { platform: ISupportedPlatformOS }) => {
    const { t } = useTranslation();
    const { poster } = useStaticQuery(query);

    return (
        <Wrapper>
            <FloatingSquareWrapper left={0} top="20%" width={214}>
                <FloatingSquare rotate={-77.19} />
            </FloatingSquareWrapper>
            <FloatingSquareWrapper top="-100%"  width="473px">
                <FloatingSquare rotate={-44.62} />
            </FloatingSquareWrapper>
            <FloatingSquareWrapper right="-5%" bottom="-30%" width={473}>
                <FloatingSquare rotate={-44.62} />
            </FloatingSquareWrapper>
            <PageContainer onlyX>
                <GridParent>
                    <GridChild gridColumn={{ _: "1/ span 12", laptopS: "2/ span 8"}}>
                        <Box display="flex" flexDirection={{ _: 'column', tablet: 'row' }} gridGap={30} alignItems={{ _: undefined, tablet: "center" }} justifyContent={{ _: "center", tablet: undefined }}>
                            <Box position="relative" maxWidth={260} mr={{ _: 170, tablet: 'unset' }}>
                                <GatsbyImage alt="Browser preview" image={poster.childImageSharp.gatsbyImageData} />
                            </Box>
                            <Box maxWidth={{ _: undefined, tablet: 402, laptopS: 590}}>
                                <Typography variant="h2" color={{ light: 'commons.white', dark: 'dark.white' }}>{t('thankYou')} {platformDownloadData[platform].name}!</Typography>
                                <Typography variant="subtitle" color={{ light: 'light.grey', dark: 'dark.lightGrey' }} mt={10}>{t('autoDownload')}</Typography>
                                <Typography variant="paragraph" color={{ light: 'light.grey', dark: 'dark.lightGrey' }} mt={10}>{t('ifDownloadDidntStart')}, <StyledLink href={platformDownloadData[platform].link}>{t('tryAgain')}</StyledLink></Typography>
                            </Box>
                        </Box>
                    </GridChild>
                </GridParent>
            </PageContainer>
        </Wrapper>
    );
}

export default HeroBanner;
