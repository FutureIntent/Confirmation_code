import { props } from '@styled-system/should-forward-prop';
import { Children, ReactElement, RefObject } from 'react';
import styled from 'styled-components';
import { Navigation, Pagination, Thumbs, Virtual } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

interface SliderProps extends SwiperProps {
    children?: ReactElement[] | ReactElement;
    showOverflow?: boolean;
    sliderRef?: RefObject<HTMLElement>;
    paginationRef?: RefObject<HTMLElement>;
    showNumber?: boolean;
    shouldShrink?: boolean;
}

const StyledSwiper = styled(Swiper).withConfig({
    shouldForwardProp: (prop) => ![...props, 'showOverflow' , 'shouldShrink'].includes(String(prop)),
})<Pick<SliderProps, 'showOverflow' | 'shouldShrink'> & { ref?: RefObject<HTMLElement> }>`
    max-width: 100%;
    height: 100%;

    .swiper-slide {
        height: auto;
        flex-shrink: ${({ shouldShrink }) => (shouldShrink ? '1' : '0')};
    }

    ${({ showOverflow }) =>
        showOverflow &&
        `
        overflow: visible !important;
    `}
`;

const Slider = ({
    children,
    showOverflow = false,
    sliderRef,
    paginationRef,
    showNumber,
    ...rest
}: SliderProps) => (
    <StyledSwiper
        grabCursor
        modules={[Navigation, Pagination, Thumbs, Virtual]}
        showOverflow={showOverflow}
        ref={sliderRef}
        pagination={{
            el: paginationRef?.current,
            clickable: true,
            renderBullet: (index: number, className: string) =>
                `<p class='bullet ${className} ${showNumber ? 'bullet-number' : ''}'><span>${
                    showNumber ? index + 1 : ''
                }</span></p>`,
        }}
        {...rest}
    >
        {Children.toArray(children).map((child, index) => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
            <SwiperSlide key={child.key} virtualIndex={index}>
                {child}
            </SwiperSlide>
        ))}
    </StyledSwiper>
);

export default Slider;
