import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';

import LogoAbstract from '@components/molecules/Icons/LogoAbstract';

import RegistrationLogoText from '@components/organisms/RegistrationForm/RegistrationLogoText';

const Wrapper = styled.div`
    background: linear-gradient(
        151.13deg,
        rgba(65, 118, 247, 0.15) 0.03%,
        rgba(105, 77, 237, 0.15) 82.01%
    );
    display: none;
    height: 100%;
    padding: 50px;
    position: relative;
    width: 50%;

    ${mediaQueries.laptopS} {
        display: block;
    }
`;

const query = graphql`
    query {
        mainBanner: file(relativePath: { eq: "illustration/main_home.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const BannerBlock = () => {
    const { mainBanner } = useStaticQuery(query);

    return (
        <Wrapper>
            <Box display="flex" justifyContent="center" mb={15} alignItems="center">
                <LogoAbstract size="xxl" />
                <RegistrationLogoText />
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <GatsbyImage
                    loading="eager"
                    style={{ height: '100%' }}
                    image={mainBanner.childImageSharp.gatsbyImageData}
                    alt="Surfinite"
                />
            </Box>
        </Wrapper>
    );
};

export default BannerBlock;
