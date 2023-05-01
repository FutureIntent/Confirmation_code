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

const query = graphql`
    query {
        poster: file(relativePath: { eq: "illustration/downloadsPage/downloadsHeroBanner.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const Wrapper = styled.div`
    //min-height: 520px;
    align-items: flex-end;
    background: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.gradients.downloadsDark : theme.colors.gradients.downloads};
    display: flex;
    justify-content: center;
    left: 0;
    overflow: hidden;
    padding-top: 40px;
    position: relative;
    top: 0;
    width: 100%;
    z-index: -1;

    ${mediaQueries.tablet} {
        padding-top: 150px;
    }

    ${mediaQueries.laptopS} {
        padding-top: 60px;
    }
`;

const HeroBanner = () => {
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
                        <Box display="flex" flexDirection={{ _: 'column', tablet: 'row' }} gridGap={30}>
                            <Box position="relative" maxWidth={{ _: 452, laptopS: 588}} order={{ _: 2, tablet: 1 }}>
                                <GatsbyImage alt="Browser preview" image={poster.childImageSharp.gatsbyImageData} />
                            </Box>
                            <Box order={{ _: 1, tablet: 2 }} maxWidth={{ _: undefined, tablet: 402, laptopS: 590}}>
                                <Typography variant="h2" color={{ light: 'commons.white', dark: 'dark.white' }}>{t('downloadSurfinite')}</Typography>
                                <Typography variant="subtitle" color={{ light: 'light.grey', dark: 'dark.lightGrey' }} mt={10}>{t('caption')}</Typography>
                            </Box>
                        </Box>
                    </GridChild>
                </GridParent>
            </PageContainer>
        </Wrapper>
    );
}

export default HeroBanner;
