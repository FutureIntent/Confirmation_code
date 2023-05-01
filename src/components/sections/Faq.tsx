import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Section from '@components/atoms/Section';
import Typography from '@components/atoms/Typography';

import Accordion from '@components/molecules/Accordion';

import ContactUsModal from '@components/organisms/ContactUsModal/ContactUsModal';

import GridChild from '@components/templates/GridChild';
import GridParent from '@components/templates/GridParent';

const Faq = () => {
    const { t } = useTranslation();
    const qaList = [
        {
            question: t('faq.q1'),
            answer: t('faq.a1'),
        },
        {
            question: t('faq.q2'),
            answer: t('faq.a2'),
        },
        {
            question: t('faq.q3'),
            answer: t('faq.a3'),
        },
        {
            question: t('faq.q4'),
            answer: t('faq.a4'),
        },
        {
            question: t('faq.q5'),
            answer: t('faq.a5'),
        },
        {
            question: t('faq.q6'),
            answer: t('faq.a6'),
        },
        {
            question: t('faq.q7'),
            answer: t('faq.a7'),
        },
    ];
    const microData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            qaList.map((question) => ({
                '@type': 'Question',
                'name': question.question,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': question.answer,
                },
            })),
        ],
    };

    return (
        <Section id="faq">
            <script type="application/ld+json">{JSON.stringify(microData)}</script>
            <GridParent>
                <GridChild gridColumn={{ _: 'span 12', desktop: '4/ span 6' }}>
                    <Box display="flex" justifyContent="center">
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            maxWidth={636}
                        >
                            <Typography
                                data-aos="fade-down"
                                textAlign="center"
                                variant="h2"
                                color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                                mb={16}
                            >
                                FAQ
                            </Typography>
                            <ContactUsModal>
                                <Button data-aos="fade-down" data-aos-delay="150">
                                    <Typography variant="accent" color="commons.white">
                                        {t('faq.btn')}
                                    </Typography>
                                </Button>
                            </ContactUsModal>
                        </Box>
                    </Box>
                </GridChild>

                <GridChild gridColumn={{ _: 'span 12', laptopS: '3/ span 8' }}>
                    <Box
                        mt={50}
                        display={{ _: 'block', tablet: 'grid' }}
                        gridTemplateColumns={{ _: '', tablet: '1fr 1fr' }}
                        gridGap={{ _: 10, tablet: 30 }}
                    >
                        <Box
                            display="grid"
                            gridColumn={1}
                            gridGap={{ _: 10, tablet: 30 }}
                            mb={{ _: 10, tablet: 'unset' }}
                            gridAutoRows="max-content"
                        >
                            {qaList.map(
                                (qaItem, index) =>
                                    index % 2 === 0 && (
                                        <Accordion
                                            key={qaItem.question}
                                            data-aos="zoom-right"
                                            data-aos-delay="50"
                                            label={qaItem.question}
                                            content={qaItem.answer}
                                        />
                                    ),
                            )}
                        </Box>
                        <Box
                            display="grid"
                            gridColumn={2}
                            gridGap={{ _: 10, tablet: 30 }}
                            gridAutoRows="max-content"
                        >
                            {qaList.map(
                                (qaItem, index) =>
                                    index % 2 === 1 && (
                                        <Accordion
                                            key={qaItem.question}
                                            data-aos="zoom-right"
                                            data-aos-delay="50"
                                            label={qaItem.question}
                                            content={qaItem.answer}
                                        />
                                    ),
                            )}
                        </Box>
                    </Box>
                </GridChild>
            </GridParent>
        </Section>
    );
};

export default Faq;
