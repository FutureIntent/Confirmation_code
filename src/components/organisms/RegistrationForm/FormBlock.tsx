import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import mediaQueries from '@theme/configs/mediaQueries';

import Typography from '@components/atoms/Typography';

import Registration from '@components/organisms/Forms/Registration';

const Wrapper = styled.div`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light
            ? theme.colors.commons.white
            : theme.colors.dark.eclipseMedium};
    display: block;
    height: 100%;
    padding: 30px;
    width: 100%;

    ${mediaQueries.laptopS} {
        width: 50%;
    }
`;

const FormBlock = ({ showConfirmation, storeUserEmail }: {
    showConfirmation: any,
    storeUserEmail: any
}) => {
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Typography variant="h2" color={{ light: 'light.brandBlack', dark: 'dark.white' }}>
                {t('registration.heading')}
            </Typography>
            <Typography
                variant="paragraph"
                color={{ light: 'light.mediumGrey', dark: 'dark.lightGrey' }}
                mb={20}
            >
                {t('registration.subTitle')}
            </Typography>

            <Registration showConfirmation={showConfirmation} storeUserEmail={storeUserEmail} />
            {/* <Hr text="Или" /> */}
            {/* <Button variant="secondary" width="100%" mt={30} mb={20}> */}
            {/*    <Box display="flex" alignItems="center" justifyContent="center"> */}
            {/*        <Google /> */}
            {/*        <Typography */}
            {/*            variant="accent" */}
            {/*            color={{ light: 'light.brandAccent', dark: 'dark.brandAccentNight' }} */}
            {/*            ml={15} */}
            {/*    > */}
            {/*            {t('registration.googleAuth')} */}
            {/*        </Typography> */}
            {/*    </Box> */}
            {/* </Button> */}
            {/* <Terms textAlign="center" mt={15}> */}
            {/*    {t('registration.googleTerms1')} <span>{t('registration.googleTerms2')}</span>{' '} */}
            {/*    {t('registration.googleTerms3')} <span>{t('registration.googleTerms4')}</span> */}
            {/* </Terms> */}
        </Wrapper>
    );
};

export default FormBlock;
