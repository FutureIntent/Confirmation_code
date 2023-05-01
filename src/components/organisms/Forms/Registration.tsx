
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormState } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';


import Button from '@components/atoms/Button';

import Input from '@components/atoms/Input/Input';

import Typography from '@components/atoms/Typography';

import InputPerson from '@components/molecules/Icons/InputPerson';
import Keylock from '@components/molecules/Icons/Keylock';
import { DefaultFetchURL } from "@theme/const";
import { useLocation } from "@reach/router";
import Box from "@components/atoms/Box";
import Checkbox from "@components/atoms/Checkbox/Checkbox";
import Terms from "@components/atoms/Terms";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ToastContent = ({ title, description }: { title: string; description: string; }) => (
    <>
        <Typography variant="accent" color="white">
            {title}
        </Typography>
        <Typography variant="caption" color="white">
            {description}
        </Typography>
    </>
)
const Registration = ({ showConfirmation, storeUserEmail }: {
    showConfirmation: any,
    storeUserEmail: any
}
) => {
    const [inviteEmail, setInviteEmail] = useState<string | null>(null);
    const { t } = useTranslation();
    const schema = yup.object().shape({
        email: yup
            .string()
            .required(`Please provide the student's email`)
            .email('Please provide a valid email address'),
        password: yup
            .string()
            .transform((x) => (x === '' ? undefined : x))
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
        acceptTerms: yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
    });
    const { search } = useLocation();
    const searchParamEmail = new URLSearchParams(search).get('email');

    const { control, handleSubmit, setValue } = useForm({
        defaultValues: {
            email: inviteEmail || '',
            password: '',
            confirmPassword: '',
        },
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const { isValid } = useFormState({ control });

    useEffect(() => {
        if(searchParamEmail) {
            const mail = window.atob(searchParamEmail);

            setInviteEmail(mail);
            setValue('email', mail);
        }
    }, [searchParamEmail])

    const onSubmit = async (data: { email: string; password: string }) => {
        const { email, password } = data;

        try {
            const response = await fetch(`${DefaultFetchURL}/auth/signup`, {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({ email, password }),
            });

            if (response.status === 200) {
                storeUserEmail(email);
                showConfirmation();
            } else {
                toast(<ToastContent title={t('registration.errorMsg')} description={`Error code: ${response.status}`} />,{
                    type: 'error',
                });
            }
        } catch (error: any) {
            toast( () => <ToastContent title={t('registration.errorMsg')} description={error.message} />,{
                type: 'error',
            });
        }

        // eslint-disable-next-line no-console
        console.log({ email, password });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                inputName="email"
                control={control}
                readOnly={!!inviteEmail}
                type="email"
                icon={<InputPerson />}
                placeholder={t('registration.form.email.placeholder')}
                label={t('registration.form.email.name')}
            />
            <Input
                inputName="password"
                control={control}
                type="password"
                icon={<Keylock />}
                placeholder={t('registration.form.password.placeholder')}
                label={t('registration.form.password.name')}
            />
            <Input
                inputName="confirmPassword"
                control={control}
                type="password"
                icon={<Keylock />}
                placeholder={t('registration.form.confirmPassword.placeholder')}
                label={t('registration.form.confirmPassword.name')}
            />
            <Box display="flex" alignItems="flex-start">
                <Checkbox control={control} inputName="acceptTerms" />
                <Terms>
                    {t('registration.form.terms.part1')}{' '}
                    <a target="_blank" rel="noopener noreferrer" href="/terms-of-use"><span>{t('registration.form.terms.part2')}</span></a>{' '}
                    {t('registration.form.terms.part3')}{' '}
                    <a target="_blank" rel="noopener noreferrer" href="/privacy-policy"><span>{t('registration.form.terms.part4')}</span></a>
                </Terms>
            </Box>
            <Button type="submit" width="100%" mt={30} mb={20} disabled={!isValid}>
                <Typography variant="accent" color="commons.white">
                    {t('shared.register')}
                </Typography>
            </Button>
        </form>
    );
};

export default Registration;
