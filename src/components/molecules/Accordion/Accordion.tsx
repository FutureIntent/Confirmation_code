import { props } from '@styled-system/should-forward-prop';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useMeasure } from 'react-use';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import ChevronDown from '@components/molecules/Icons/ChevronDown';

const AppAccordionButton = styled.div.withConfig({
    shouldForwardProp: (prop) => ![...props, 'isExpanded'].includes(String(prop)),
})<{ isExpanded: boolean }>`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light
            ? theme.colors.commons.white
            : theme.colors.dark.eclipseMedium};
    border: 0;
    outline: 0;
    padding: 25px 50px 25px 25px;
    position: relative;
    text-align: left;
    cursor: pointer;
}`;

const AccordionContent = styled.div`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light
            ? theme.colors.commons.white
            : theme.colors.dark.eclipseMedium};
`;

const Accordion = ({ label, content }: { label: string; content: string }) => {
    const [open, toggle] = useState(false);
    const [contentHeight, setContentHeight] = useState<number>(0);
    const [ref, { height }] = useMeasure<HTMLDivElement>();
    const animationConfig = { mass: 0.6, tension: 190, friction: 8 };

    const expand = useSpring({
        config: animationConfig,
        overflow: 'hidden',
        height: open ? `${contentHeight}px` : '0',
    });
    const fade = useSpring({
        config: animationConfig,
        opacity: open ? '1' : '0',
    });
    const spin = useSpring({
        config: animationConfig,
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    });

    useEffect(() => {
        const setNewHeight = () => setContentHeight(height);

        setNewHeight();
        window.addEventListener('resize', setNewHeight);

        return window.removeEventListener('resize', setNewHeight);
    }, [height]);

    return (
        <div>
            <AppAccordionButton isExpanded={open} onClick={() => toggle(!open)}>
                <Typography variant="accent" color={open ? 'light.brandAccent' : 'light.darkGrey'}>
                    {label}
                </Typography>
                <Box position="absolute" right={25} top={25}>
                    <animated.div style={spin}>
                        <ChevronDown />
                    </animated.div>
                </Box>
            </AppAccordionButton>
            <animated.div style={expand}>
                <AccordionContent ref={ref}>
                    <animated.div style={fade}>
                        <Typography
                            p="0 25px 25px"
                            variant="paragraph"
                            color={{ light: 'light.brandBlack', dark: 'dark.lightGrey' }}
                        >
                            {content}
                        </Typography>
                    </animated.div>
                </AccordionContent>
            </animated.div>
        </div>
    );
};

export default Accordion;
