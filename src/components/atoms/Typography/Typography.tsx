import { props } from '@styled-system/should-forward-prop';
import { getClampValue } from '@utils/helpers';
import { colorVariant } from '@utils/styles';
import { ComponentClass, ReactNode, ReactElement } from 'react';
import type { UseActiveViewportSizeReturn } from 'src/hooks/useActiveViewportSize';
import styled from 'styled-components';
import {
    variant as styledVariant,
    space,
    color as textColor,
    typography,
    textAlign,
    SpaceProps,
    TextAlignProps,
    TypographyProps as TypographyBaseProps,
    display,
    DisplayProps,
    ResponsiveValue,
    VerticalAlignProps,
    verticalAlign,
} from 'styled-system';

import { ColorModes } from '@providers/ColorModeProvider';

import { useActiveViewportSize } from '@hooks/useActiveViewportSize';

import { Device, deviceList } from '@theme/configs/breakpoints';

export const FONT_FAMILY = '"Surfinite", san-serif';
export const FONT_BOLD = 700;
export const FONT_MEDIUM = 500;
export const FONT_REGULAR = 400;

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle' | 'accent' | 'paragraph' | 'caption';

type TypographyVariant = Variant | ({ _: Variant } & { [key in Device]?: Variant });

type TransformText = 'capitalize' | 'lowercase' | 'uppercase';

export interface TypographyProps
    extends SpaceProps,
        TextAlignProps,
        TypographyBaseProps,
        VerticalAlignProps,
        DisplayProps {
    variant?: TypographyVariant;
    color?: ColorModes;
    hoverColor?: ColorModes;
    as?: ComponentClass | string | null;
    children: ReactNode;
    transformText?: TransformText;
    className?: string;
    id?: string;
}

interface StyledTypographyProps extends TypographyProps {
    variant: TypographyVariant;
    themedColor: ColorModes;
}

export const fontsConfig = {
    h1: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('32px', '48px'),
        lineHeight: 1.2,
        fontWeight: FONT_BOLD,
    },
    h2: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('28px', '40px'),
        lineHeight: 1.2,
        fontWeight: FONT_BOLD,
    },
    h3: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('24px', '30px'),
        lineHeight: 1.2,
        fontWeight: FONT_BOLD,
    },
    h4: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('18px', '20px'),
        lineHeight: 1.2,
        fontWeight: FONT_MEDIUM,
    },
    subtitle: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('18px', '24px'),
        lineHeight: 1.2,
        fontWeight: FONT_REGULAR,
    },
    accent: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('14px', '16px'),
        lineHeight: 1.5,
        fontWeight: FONT_MEDIUM,
    },
    paragraph: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('14px', '16px'),
        lineHeight: 1.2,
        fontWeight: FONT_REGULAR,
    },
    caption: {
        fontFamily: FONT_FAMILY,
        fontSize: getClampValue('10px', '12px'),
        lineHeight: 1.2,
        fontWeight: FONT_REGULAR,
    },
};

const typographyVariant = styledVariant({
    prop: 'variant',
    variants: fontsConfig,
});

const getAsProp = (
    variant: TypographyVariant,
    activeViewportSize: UseActiveViewportSizeReturn,
): string => {
    const variantMap = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'p',
        subtitle: 'p',
        accent: 'span',
        paragraph: 'p',
        caption: 'p',
    };

    // Variant is of simple string variant="h1" approach
    if (typeof variant === 'string') {
        return variantMap[variant];
    }

    // Variant is of complex object type variant={{ _: 'h2', laptop: 'h1' }}
    // Variant has key of current activeViewportSize
    if (variant[activeViewportSize]) {
        return variantMap[variant[activeViewportSize]!];
    }

    // Variant does not contain activeViewportSize key. Return the closest one.
    let closestVariantDevice = deviceList
        .slice(
            0,
            deviceList.findIndex((device) => device === activeViewportSize),
        )
        .reverse()
        .find((device) => {
            if (Object.prototype.hasOwnProperty.call(variant, device)) {
                return true;
            }

            return false;
        });

    // Variant does not contain any closest key from deviceList. Return default _ value.
    if (!closestVariantDevice) {
        closestVariantDevice = 'laptopS';
    }

    return variantMap[variant[closestVariantDevice]!];
};

const StyledTypography = styled.div.withConfig({
    shouldForwardProp: (prop) =>
        ![...props, 'themedColor', 'transformText', 'hoverColor'].includes(String(prop)),
})<StyledTypographyProps>`
    color: ${({ theme, themedColor }) => colorVariant({ color: themedColor, theme })};

    margin: 0;
    padding: 0;
    text-decoration: none;
    ${typographyVariant};
    ${display};
    ${textColor};
    ${textAlign};
    ${space};
    ${typography};
    ${verticalAlign};

    ${({ transformText }: { transformText?: TransformText }) =>
        transformText ? `text-transform: ${transformText};` : null}

    ${({ hoverColor }: { hoverColor?: ResponsiveValue<string> }) =>
        hoverColor &&
        `
            &:hover {
                color: ${hoverColor};
            }
    `}
`;

const Typography = ({
    variant = 'paragraph',
    color = 'light.brandBlack',
    hoverColor,
    as = null,
    children,
    transformText,
    className,
        id,
    ...rest
}: TypographyProps): ReactElement => {
    const activeViewportSize = useActiveViewportSize();
    const asPropFromVariant = getAsProp(variant, activeViewportSize);

    return (
        <StyledTypography
            variant={variant}
            transformText={transformText}
            themedColor={color}
            hoverColor={hoverColor}
            as={as || asPropFromVariant}
            id={id}
            {...rest}
        >
            {children}
        </StyledTypography>
    );
};

export default Typography;
