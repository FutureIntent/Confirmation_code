import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import { useColorMode } from '@hooks';

import LightBulb from '@components/molecules/Icons/LightBulb';
import Moon from '@components/molecules/Icons/Moon';

const SwitchWrapper = styled.div<{ colorMode: ColorMode }>`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light ? theme.colors.light.grey : theme.colors.dark.eclipseLight};
    border-radius: ${({ theme }) => theme.space['2xs']};
    display: inline-flex;
    position: relative;

    &:after {
        background-color: ${({ theme }) =>
            theme.mode === ColorMode.light ? theme.colors.commons.white : theme.colors.dark.grey};
        border-radius: ${({ theme }) => theme.space['2xs']};
        content: '';
        height: 95%;
        left: ${({ colorMode }) => (colorMode === ColorMode.light ? 0 : '50%')};
        margin: 1px;
        position: absolute;
        top: 0;
        width: 48%;
        transition: left 0.4s ease-in-out, background-color 0.4s ease-in-out;
    }

    svg {
        position: relative;
        z-index: 10;
    }
`;

const SwitchOption = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 4px 8px;
`;

const ColorModeSwitch = () => {
    const { colorMode, setColorMode } = useColorMode();
    const isServer = typeof document === 'undefined';

    useEffect(() => {
        if (isServer || typeof window === 'undefined') return;

        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease-in-out', // default easing for AOS animations
            once: true,
            mirror: false, // whether elements should animate out while scrolling past them
        });
    }, [colorMode, isServer]);

    const toggleColorMode = () => {
        setColorMode(colorMode === ColorMode.light ? ColorMode.dark : ColorMode.light);
    };

    return (
        <SwitchWrapper colorMode={colorMode} onClick={toggleColorMode}>
            <SwitchOption>
                <LightBulb size="medium3" />
            </SwitchOption>
            <SwitchOption>
                <Moon size="medium3" />
            </SwitchOption>
        </SwitchWrapper>
    );
};

export default ColorModeSwitch;
