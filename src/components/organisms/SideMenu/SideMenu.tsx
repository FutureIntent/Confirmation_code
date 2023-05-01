// eslint-disable-next-line import/no-extraneous-dependencies
import { useDisclosure } from '@chakra-ui/hooks';
import { Drawer, DrawerBody, DrawerContent, DrawerFooter } from '@chakra-ui/modal';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useRef } from 'react';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import mediaQueries from '@theme/configs/mediaQueries';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Typography from '@components/atoms/Typography';

import Burger from '@components/molecules/Icons/Burger';
import CloseBtn from '@components/molecules/Icons/CloseBtn';
import MailInfo from '@components/molecules/MailInfo';
import TelegramInfo from '@components/molecules/TelegramInfo/TelegramInfo';

import Navigation from '@components/templates/Header/Navigation';

const StyledContent = styled(DrawerContent)`
    display: flex;
    flex-direction: column;

    height: calc(100vh - var(--header-height));
    margin-top: var(--header-height);
    padding: 15px;
    position: relative;
    width: 90% !important;
    z-index: 99;

    ${mediaQueries.tablet} {
        padding: 40px;
    }
`;

const StyledBody = styled(DrawerBody)`
    align-items: center;
    display: flex;
    height: 100%;
`;
const StyledFooter = styled(DrawerFooter)`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light
            ? theme.colors.light.lightGrey
            : theme.colors.dark.eclipseLight};
    border-radius: ${({ theme }) => theme.space['2xs']};
    flex-wrap: wrap;
    grid-gap: 30px;
    padding: 15px;
    width: 100%;

    ${mediaQueries.tablet} {
        padding: 37px;
    }

    &.chakra-modal__footer {
        justify-content: space-between;
    }
`;

const SideMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef(null);
    const breakpoints = useBreakpoint();

    return (
        <>
            <Box
                cursor="pointer"
                display="flex"
                alignItems="center"
                ref={btnRef}
                onClick={isOpen ? onClose : onOpen}
            >
                {isOpen ? <CloseBtn /> : <Burger />}
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size="xs"
                finalFocusRef={btnRef}
            >
                <StyledContent>
                    <StyledBody>
                        <Navigation isVertical handleClick={onClose} />
                    </StyledBody>

                    <StyledFooter>
                        <Box display="flex" justifyContent="space-between">
                            <Box display="flex">
                                <TelegramInfo
                                    iconSize={breakpoints.tablet ? 'large' : 'medium'}
                                    isWhiteBg
                                />
                                <Box display="flex" ml={{ _: 15, tablet: 30 }}>
                                    <MailInfo
                                        iconSize={breakpoints.tablet ? 'large' : 'medium'}
                                        isWhiteBg
                                    />
                                </Box>
                            </Box>
                        </Box>
                        <Button
                            variant="secondary"
                            width={{ _: '100%', tablet: 'auto' }}
                            p="15px 20px"
                        >
                            <Typography variant="accent" color="light.brandBlue">
                                Написать нам
                            </Typography>
                        </Button>
                    </StyledFooter>
                </StyledContent>
            </Drawer>
        </>
    );
};

export default SideMenu;
