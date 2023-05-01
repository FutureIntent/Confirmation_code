import { getClampValue } from '@utils/helpers';
import { graphql, useStaticQuery } from 'gatsby';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import useConfetti from '@hooks/useConfetti';

import { BETA_REGISTRATION_END} from '@theme/appConfig';
import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Container from '@components/atoms/Container';
import Typography from '@components/atoms/Typography';

import CloseBtn from '@components/molecules/Icons/CloseBtn';
import LinkAsButton from "@components/atoms/LinkAsButton";

const Wrapper = styled.div`
    align-items: center;
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light
            ? theme.colors.light.brandAccent
            : theme.colors.dark.brandAccentNight};
    display: flex;
    min-height: 60px;
    overflow: hidden;
    padding: 5px ${getClampValue('15px', '45px')};
    position: fixed;
    top: var(--header-height);
    width: 100%;
    z-index: 200;
`;

const CloseIconWrapper = styled.div`
    align-items: center;
    border-radius: ${({ theme }) => theme.space['2xs']};
    cursor: pointer;
    display: flex;
    margin-top: -1.25rem;
    padding: 0.5rem;
    position: absolute;
    right: 0;
    top: 10%;

    ${mediaQueries.tablet} {
        top: 50%;
        margin-left: 20px;
    }

    &:hover {
        opacity: 0.85;
    }

    svg {
        opacity: 0.3;
        rect {
            fill: ${({ theme }) =>
                theme.mode === ColorMode.light
                    ? theme.colors.light.lightGrey
                    : theme.colors.dark.white};
        }
    }
`;

export const ConfettiComponent = () => {
    useConfetti({
        leftId: 'top-left-confetti',
        rightId: 'top-right-confetti',
    });

    return (
        <>
            <Box position="absolute" opacity="60%" bottom={0} left="10%" id="top-left-confetti" />
            <Box position="absolute" opacity="60%" bottom={0} left="80%" id="top-right-confetti" />
        </>
    );
};

const query = graphql`
    query mainBanner {
        discount: file(relativePath: { eq: "illustration/main_home_for_banner.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const BetaNotificationBar = ({ handleCloseBanner }: { handleCloseBanner: () => void }) => {
    const { t } = useTranslation();
    const { discount } = useStaticQuery(query);
    const { tablet } = useBreakpoint();

    return (
        <Wrapper>

            <Container>
                <Box
                    display="flex"
                    zIndex={100}
                    position="relative"
                    pr={tablet ? 60 : 0}
                    flexWrap={{ _: 'wrap', tablet: 'nowrap' }}
                    justifyContent="space-between"
                    gridGap={10}
                    pt={{ _: 40, tablet: 0 }}
                >
                    <Box display="flex" flexGrow={1}>
                        <Box py={5} maxWidth={60}>
                            <GatsbyImage
                                loading="eager"
                                image={discount.childImageSharp.gatsbyImageData}
                                alt="discount"
                            />
                        </Box>
                        <Box
                            flexGrow={1}
                            display="flex"
                            alignItems="center"
                            justifyContent={{ _: 'flex-start', laptopS: 'center' }}
                        >
                            <Typography
                                variant={{ _: 'paragraph', mobileM: 'h4' }}
                                color="commons.white"
                                mx={20}
                            >
                                {t('shared.betaNotice')} {BETA_REGISTRATION_END}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent={{ _: 'center', tablet: 'unset' }}
                        width={{ _: '100%', tablet: 'unset' }}
                        mb={{ _: '5px', tablet: '' }}
                    >
                        <LinkAsButton to="/registration" variant="beta">{t('shared.getFreeBeta')}</LinkAsButton>
                    </Box>
                    <CloseIconWrapper onClick={handleCloseBanner}>
                        <CloseBtn color="red" size="medium2" />
                    </CloseIconWrapper>
                </Box>
            </Container>
            <ConfettiComponent />
        </Wrapper>
    );
};

export default BetaNotificationBar;
