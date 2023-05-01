import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import Typography from "@components/atoms/Typography";
import styled from "styled-components";
import { ColorMode } from "@providers/ColorModeProvider/ColorModeContext";
import Card from "@components/atoms/Card";
import { useTranslation } from "react-i18next";
import Box from "@components/atoms/Box";
import { ReactElement } from "react";

interface IStepCardProps {
    step: number;
    title: string;
    description: ReactElement;
    img: IGatsbyImageData;
}

const CardTag = styled.div`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light ? 'rgb(72 109 255 / 15%)' : 'rgb(26 32 56 / 15%)'};
    border-radius: ${({ theme }) => theme.space['2xs']} 0;
    left: 0;
    padding: 2px 9px;
    position: absolute;

    top: 0;
`;

const StepCard = ({ step, img, description, title }: IStepCardProps) => {
    const { t } = useTranslation();

    return (
        <Card
            data-aos="fade-up"
            data-aos-delay="300"
            cardSize="small"
            variant="light"
            height="100%"
            p={0}
            >
            <GatsbyImage
                loading="lazy"
                style={{ width: '100%', aspectRatio: '384/300' }}
                image={img}
                alt={`${t('step')} ${step}`}
            />
            <CardTag>
                <Typography
                    variant="h4"
                    color={{
                                light: 'light.brandAccent',
                                dark: 'light.brandAccent',
                            }}
                    mb={5}
                    >
                    {t('step')} {step}
                </Typography>
            </CardTag>
            <Box p="15px 30px">
                <Typography variant="h4" color={{ light: 'light.brandBlack', dark: 'dark.white' }}>{title}</Typography>
                {description}
            </Box>
        </Card>
    )
}

export default StepCard;
