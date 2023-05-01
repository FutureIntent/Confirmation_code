import { useContext, useRef, useState } from "react";
import PinInput  from "react-pin-input";
import { DefaultFetchURL } from "@theme/const";
import colors from "@theme/configs/colors";
import { fontsConfig } from "@components/atoms/Typography/Typography";
import ColorModeContext, { ColorMode } from "@providers/ColorModeProvider/ColorModeContext";
import { useTranslation } from "react-i18next";

const ConfirmationCode = ({ trialNumber, setMessage, setAllowFetch, showSuccess }: {
    trialNumber: number;
    setMessage: (msg: string) => void;
    setAllowFetch: (val: boolean) => void;
    showSuccess: () => void;
}) => {
    const { t } = useTranslation();
    const pinRef = useRef<PinInput>(null);
    const { colorMode } = useContext(ColorModeContext);
    const [trialsNumber, setTrialsNumber] = useState<number>(trialNumber);

    const checkTrialsNumber = (): void => {
        if (trialsNumber <= 0) {
            setAllowFetch(false);
            setMessage(t('tooManyTries'));
        }
    }

    const fetchConfirmationCode = async (pinCode: string) => {
        setTrialsNumber(trialsNumber - 1);
        pinRef.current?.clear();

       await fetch(`${DefaultFetchURL}/auth/confirm_signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: pinCode,
        })
            .then(res => {
                if (res.ok) {
                    showSuccess();
                } else if (res.status === 404) {
                    setMessage("Incorrect code");
                } else if (res.status === 409) {
                    setMessage("User already exists");
                }
            })
               // eslint-disable-next-line no-console
           .catch(err => console.log(err))

        checkTrialsNumber();
    }

    return (
        <div>
            <PinInput
                length={5}
                focus
                ref={pinRef}
                type="numeric"
                inputMode="numeric"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    gridColumnGap: '1rem',
                    maxWidth: 300
                }}
                inputStyle={{
                    ...fontsConfig.paragraph,
                    color: colorMode === ColorMode.dark ? colors.dark.white : colors.light.darkGrey,
                    paddingBottom: "2%",
                    width: '100%',
                    height: 40,
                    borderRadius: 0,
                    border: '1px solid transparent',
                    borderBottomColor: colorMode === ColorMode.dark ? colors.dark.white : colors.light.darkGrey,
                }}
                inputFocusStyle={{
                    borderBottomColor: colors.dark.brandAccentNight
                }}
                onComplete={fetchConfirmationCode}
            />
        </div>
    )
}

export default ConfirmationCode;
