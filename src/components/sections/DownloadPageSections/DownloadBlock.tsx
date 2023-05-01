import { getOperatingSystem } from "@utils/helpers";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import Box from "@components/atoms/Box";
import { GatsbyImage } from "gatsby-plugin-image";
import { ISupportedPlatformOS, platformDownloadData } from "@components/organisms/DownloadDemo/DownloadDemo";
import GridParent from "@components/templates/GridParent";
import GridChild from "@components/templates/GridChild";
import mediaQueries from "@theme/configs/mediaQueries";
import SmallPlatformDownloadCard from "@components/molecules/PlatformDownloadCard/SmallPlatformDownloadCard";
import { ColorMode } from "@providers/ColorModeProvider/ColorModeContext";
import React, { useLayoutEffect } from "react";
import BigPlatformDownloadCard from "../../molecules/PlatformDownloadCard/BigPlatformDownloadCard";

const query = graphql`
    query {
        win: file(relativePath: { eq: "illustration/downloadsPage/windows_pc.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        osx: file(relativePath: { eq: "illustration/downloadsPage/mac_os.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        linux: file(relativePath: { eq: "illustration/downloadsPage/linux_os.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const BigDownloadCard = styled.div`
    background: ${({ theme }) => theme.mode === ColorMode.dark ? theme.colors.gradients.downloadsBigCardDark : theme.colors.gradients.downloadsBigCard};
    border-radius: 6px;
    display:flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px 20px 30px;

    ${mediaQueries.tablet} {
        flex-direction: row;
        padding: 30px 60px 60px;
    }

`;

const DownloadBlock = ({ setPlatform }: { setPlatform: (platform: ISupportedPlatformOS) => void }) => {
    const [mainOs, setMainOs] = React.useState<ISupportedPlatformOS | null>(null);
    const { win, osx, linux } = useStaticQuery(query);
    const {os} = getOperatingSystem();

    const cardPosters = {
        windows: win.childImageSharp.gatsbyImageData,
        appleSilicon: osx.childImageSharp.gatsbyImageData,
        osx: osx.childImageSharp.gatsbyImageData,
        linux: linux.childImageSharp.gatsbyImageData,
    }

    useLayoutEffect(() => {
        if(Object.keys(ISupportedPlatformOS).includes(os)) {
            setMainOs(os as ISupportedPlatformOS);
        }
    }, [os])
    if(!mainOs) return null;

    const smallCards = Object.keys(platformDownloadData).filter((platformKey) => platformKey !== mainOs);

    return (
        <Box mt="-10%" zIndex="1">
            <GridParent>
                <GridChild gridColumn={{ _: "1 / span 12", mobileM: "2/ span 10", tabletL: "4 / span 6"}}>
                    <BigDownloadCard>
                        <Box my="auto">
                            <GatsbyImage style={{ maxWidth: 262}} alt={platformDownloadData[mainOs].name} image={cardPosters[mainOs]} />
                        </Box>
                        <Box>
                            <BigPlatformDownloadCard platform={mainOs} setPlatform={setPlatform} />
                        </Box>
                    </BigDownloadCard>

                    <Box display="grid" gridTemplateColumns="repeat(auto-fill, minMax(290px, 1fr))" gridGap={30} mt={30}>
                        {smallCards.map((platformKey) => <SmallPlatformDownloadCard key={platformKey} platformKey={platformKey as ISupportedPlatformOS} platform={platformDownloadData[platformKey as ISupportedPlatformOS]} poster={cardPosters[platformKey as ISupportedPlatformOS]} setPlatform={setPlatform} />)}
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    )
}

export default DownloadBlock;
