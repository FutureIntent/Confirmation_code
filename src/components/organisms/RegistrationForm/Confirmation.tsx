import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "../../atoms/Typography";
import ConfirmationCode from "../../molecules/ConfirmationCode/ConfirmationCode";
import { Wrapper } from './Success';

function Confirmation({ email, refreshTime, trialNumber, showSuccess }: {
    email: string,
    refreshTime: number,
    trialNumber: number,
    showSuccess: any
}) {
    const { t } = useTranslation();
    const [timer, setTimer] = useState<number>(0);

    const [message, setMessage] = useState('');

    const [allowFetch, setAllowFetch] = useState(true);

    function fetchNewConfirmationCode(): void {
        setMessage('');
        setTimer(refreshTime);
    }

    useEffect(() => {
        fetchNewConfirmationCode();
    },[])

    useEffect(() => {

        const myInterval = setTimeout(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
        }, 1000)
        return () => {
            clearTimeout(myInterval);
        };
    }, [timer]);

    const timerDisplay = <Typography
        variant="paragraph"
        color={{ light: 'light.mediumGrey', dark: 'dark.lightGrey' }}
        mt={5}
        mb={20}
    >
        Resend code ({timer})
    </Typography>

    const timerExpired = <Typography
        variant="paragraph"
        color={{ light: 'dark.brandAccentNight', dark: 'dark.brandAccentNight' }}
        mt={10}
        mb={20}
    >
        <span onClick={fetchNewConfirmationCode} style={{cursor: "pointer"}}>{t('resendCode')}</span>
    </Typography>

    return (
        <Wrapper>
            <Typography mt={20} variant="h2" color={{ light: 'light.brandBlack', dark: 'dark.white' }}>
                {t('enterCodeForEmail')}
            </Typography>

            <Typography
                variant="paragraph"
                color={{ light: 'light.mediumGrey', dark: 'dark.lightGrey' }}
                mb={20}
                mt={10}
            >
                {t('weSentConfirmation')} { email }.
                {t('pleaseCheckEmail')}.
            </Typography>

            {allowFetch && <ConfirmationCode setMessage={setMessage} setAllowFetch={setAllowFetch} trialNumber={trialNumber} showSuccess={showSuccess} />}

            <Typography variant="accent" color="light.caution">
                {message}
            </Typography>

            {allowFetch && <div>
                {timer > 0 ? timerDisplay : timerExpired}
            </div>}
        </Wrapper>
    );
}

export default Confirmation;
