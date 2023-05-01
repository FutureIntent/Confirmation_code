import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormState } from 'react-hook-form';
import * as yup from 'yup';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import Checkbox from '@components/atoms/Checkbox/Checkbox';
import Input from '@components/atoms/Input/Input';
import Terms from '@components/atoms/Terms';
import Typography from '@components/atoms/Typography';

import Chat from '@components/molecules/Icons/Chat';
import InputPerson from '@components/molecules/Icons/InputPerson';
import Keylock from '@components/molecules/Icons/Keylock';
import { useTranslation } from "react-i18next";

const ContactUs = ({ onSuccess = () => {} }: { onSuccess?: () => void }) => {
    const { t } = useTranslation();
    const schema = yup.object().shape({
        name: yup.string().required('Please enter your name'),
        message: yup.string().required('Message box is empty'),
        email: yup
            .string()
            .required(`Please provide email`)
            .email('Please provide a valid email address'),
        acceptTerms: yup.bool().oneOf([true], 'Accept Terms & Condition is required'),
        formName: yup.string(),
    });

    const { control, register, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            name: '',
            message: '',
            formName: '',
            acceptTerms: false,
        },
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
    const { isValid } = useFormState({ control });

    // TODO: finish post fn, when there will be an endpoint
    const onSubmit = (data: { email: string; name: string; message: string; formName: string }) => {
        const { email, name, message } = data;
        const formData = new FormData();

        formData.append('email', email);
        formData.append('name', name);
        formData.append('message', message);

        fetch('https://getform.io/f/273d8701-31cd-4d04-ba33-d3a7f4299b03', {
            method: 'POST',
            body: formData,
        })
            // eslint-disable-next-line no-console
            .then(() => {
                onSuccess();
            })
            .catch((e) => {
                // eslint-disable-next-line no-console
                console.error(e);
            });
        // eslint-disable-next-line no-console
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} name="contactUs">
            <Box display="flex" gridGap={15}>
                <input type="hidden" {...register('formName')} value="ContactUs" />
                <Input
                    inputName="name"
                    control={control}
                    type="text"
                    icon={<Keylock />}
                    placeholder={t('yourName')}
                    label="Имя"
                />
                <Input
                    inputName="email"
                    control={control}
                    type="email"
                    icon={<InputPerson />}
                    placeholder={t('registration.form.email.placeholder')}
                    label="Email"
                />
            </Box>
            <Input
                inputName="message"
                control={control}
                type="textarea"
                icon={<Chat />}
                placeholder={t('yourMessage')}
                label={t('message')}
            />
            <Box display="flex" alignItems="flex-start" justifyContent="space-between" mt={20}>
                <Box display="flex">
                    <Checkbox control={control} inputName="acceptTerms" />
                    <Box maxWidth={335}>
                        <Terms>
                            {t('registration.form.terms.part1')} <a href="/terms-of-use" target="_blank" rel="noreferrer"><span>{t('registration.form.terms.part2')}</span></a> {t('registration.form.terms.part3')}{' '}
                            <a href="/privacy-policy" target="_blank"><span>{t('registration.form.terms.part4')}</span></a>
                        </Terms>
                    </Box>
                </Box>
                <Button type="submit" ml={45} disabled={!isValid}>
                    <Typography variant="accent" color="commons.white">
                        {t('send')}
                    </Typography>
                </Button>
            </Box>
        </form>
    );
};

export default ContactUs;
