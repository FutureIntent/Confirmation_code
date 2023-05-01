import { useTranslation } from "react-i18next";
import { graphql, useStaticQuery } from "gatsby";
import StepCard from "@components/sections/DownloadPageSections/Success/StepCard";
import Slider from "@components/molecules/Slider";
import { useSwiper } from "@hooks/useSwiper";
import Typography from "@components/atoms/Typography";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import Box from "@components/atoms/Box";

const query = graphql`
    query {
        step1: file(relativePath: { eq: "illustration/linux/step1.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        step2: file(relativePath: { eq: "illustration/linux/step2.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
        step3: file(relativePath: { eq: "illustration/linux/step3.png" }) {
            childImageSharp {
                gatsbyImageData
            }
        }
    }
`;

const LinuxSteps = () => {
    const { t } = useTranslation();
    const { sliderRef } = useSwiper();
    const { step1, step2, step3 } = useStaticQuery(query);
    const breakpoints = useBreakpoint();

    if(breakpoints.tablet) {
        return (
            <Slider sliderRef={sliderRef} slidesPerView={3} spaceBetween={30} showOverflow={false}>
                <StepCard
                    step={1}
                    title={t('steps.linux.step1.title')}
                    description={<Typography variant="paragraph" color={{
                                light: 'light.brandBlack',
                                dark: 'dark.white'
                            }}>{t('steps.linux.step1.text')}</Typography>}
                    img={step1.childImageSharp.gatsbyImageData}
                    />

                <StepCard
                    step={2}
                    title={t('steps.linux.step2.title')}
                    description={<Typography variant="paragraph" color={{
                                light: 'light.brandBlack',
                                dark: 'dark.white'
                            }}>{t('steps.linux.step2.text')}</Typography>}
                    img={step2.childImageSharp.gatsbyImageData}
                    />

                <StepCard
                    step={3}
                    title={t('steps.linux.step3.title')}
                    description={<Typography variant="paragraph" color={{
                                light: 'light.brandBlack',
                                dark: 'dark.white'
                            }}>{t('steps.linux.step3.text')}</Typography>}
                    img={step3.childImageSharp.gatsbyImageData}
                    />
            </Slider>
        )
    }

    return (
        <Box display="flex" flexDirection="column" gridGap={30}>
            <StepCard
                step={1}
                title={t('steps.linux.step1.title')}
                description={<Typography variant="paragraph" color={{
                            light: 'light.brandBlack',
                            dark: 'dark.white'
                        }}>{t('steps.linux.step1.text')}</Typography>}
                img={step1.childImageSharp.gatsbyImageData}
                />

            <StepCard
                step={2}
                title={t('steps.linux.step2.title')}
                description={<Typography variant="paragraph" color={{
                            light: 'light.brandBlack',
                            dark: 'dark.white'
                        }}>{t('steps.linux.step2.text')}</Typography>}
                img={step2.childImageSharp.gatsbyImageData}
                />

            <StepCard
                step={3}
                title={t('steps.linux.step3.title')}
                description={<Typography variant="paragraph" color={{
                            light: 'light.brandBlack',
                            dark: 'dark.white'
                        }}>{t('steps.linux.step3.text')}</Typography>}
                img={step3.childImageSharp.gatsbyImageData}
                />
        </Box>
    )
}

export default LinuxSteps;
