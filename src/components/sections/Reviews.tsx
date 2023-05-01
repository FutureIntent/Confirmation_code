import { props as defaultProps } from '@styled-system/should-forward-prop';
import { getClampValue } from '@utils/helpers';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { space } from 'styled-system';

import { useSwiper } from '@hooks/useSwiper';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import ChevronDown from '@components/molecules/Icons/ChevronDown';
import FBIcon from '@components/molecules/Icons/FBIcon';
import Slider from '@components/molecules/Slider';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const Slide = () => (
    <Card>
        <Box display="flex" flexWrap={{ _: 'wrap', tablet: 'nowrap' }} position="relative">
            <Box
                maxWidth={{ _: '60px', tablet: '140px', laptopS: '100px' }}
                mr={{ _: 0, tablet: getClampValue('16px', '20px') }}
            >
                <StaticImage src="https://picsum.photos/640/480" alt="dummyImg" aspectRatio={1} />
            </Box>
            <Box
                display="flex"
                flexWrap={{ _: 'wrap', laptopS: 'nowrap' }}
                alignItems={{ _: '', laptopS: 'center' }}
                width="100%"
                justifyContent="space-between"
            >
                <Box maxWidth={890} mb={{ _: '20px', laptopS: '0' }} mt={{ _: '20px', tablet: 0 }}>
                    <Typography
                        variant="h4"
                        color={{ light: 'light.brandBlack', dark: 'commons.white' }}
                        mb={16}
                    >
                        Top Waifu
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color={{ light: 'light.brandBlack', dark: 'commons.white' }}
                    >
                        Проверяйте стоимость товаров глазами всех пользователей, так как продавец
                        формирует цены в зависимости от местоположения покупателей.
                    </Typography>
                </Box>
            </Box>

            <Box position="absolute" top={0} right={0}>
                <FBIcon size="large" />
            </Box>
        </Box>
    </Card>
);

const StyledChevron = styled(Box).withConfig({
    shouldForwardProp: (prop) => ![...defaultProps, 'direction'].includes(String(prop)),
})<{ direction: 'left' | 'right' }>`
    transform: rotate(${({ direction }) => (direction === 'left' ? '90deg' : '-90deg')});
    ${space};
`;

const Reviews = () => {
    const { sliderRef, nextSlide, prevSlide } = useSwiper();

    return (
        <Section id="reviews">
            <GridParent>
                <GridChild gridColumn={{ _: 'span 12', desktop: '4/ span 6' }}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        data-aos="fade-down"
                        data-aos-delay="50"
                    >
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            maxWidth={636}
                        >
                            <Typography
                                textAlign="center"
                                variant="h2"
                                color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                            >
                                Отзывы пользователей
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        data-aos="fade-in"
                        data-aos-delay="150"
                        display="flex"
                        flexWrap={{ _: 'wrap', tablet: 'nowrap' }}
                        justifyContent={{ _: 'space-between', tablet: 'unset' }}
                        alignItems="center"
                        mt={52}
                    >
                        <StyledChevron
                            order={{ _: 2, tablet: 1 }}
                            direction="left"
                            onClick={prevSlide}
                            mr={{ _: 0, tablet: 30 }}
                            mt={{ _: 20, tablet: 0 }}
                        >
                            <ChevronDown size="large" />
                        </StyledChevron>
                        <Box order={{ _: 1, tablet: 2 }} overflowX="hidden" zIndex={0}>
                            <Slider sliderRef={sliderRef} showOverflow={false}>
                                <Slide />
                                <Slide />
                                <Slide />
                                <Slide />
                            </Slider>
                        </Box>
                        <StyledChevron
                            order={{ _: 2, tablet: 3 }}
                            direction="right"
                            onClick={nextSlide}
                            ml={{ _: 0, tablet: 30 }}
                            mt={{ _: 20, tablet: 0 }}
                        >
                            <ChevronDown size="large" />
                        </StyledChevron>
                    </Box>
                </GridChild>
            </GridParent>
        </Section>
    );
};

export default Reviews;
