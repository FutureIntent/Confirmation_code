import { ReactNode, useState } from 'react';
import { useController } from 'react-hook-form';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import Label from '@components/atoms/Form/Label';
import Typography from '@components/atoms/Typography';
import { fontsConfig } from '@components/atoms/Typography/Typography';

const IconWrapper = styled.div`
    //align-items: center;
    display: flex;
    height: 100%;
    left: 15px;
    position: absolute;
    top: 15px;
`;

const InputWrapper = styled.div<{ readOnly?: boolean }>`
    background-color: ${({ theme }) =>
        theme.mode === ColorMode.light ? theme.colors.light.grey : theme.colors.dark.eclipseMedium};
    border-radius: ${({ theme }) => theme.space['2xs']};
    color: ${({ theme }) =>
        theme.mode === ColorMode.light ? theme.colors.light.brandBlack : theme.colors.dark.white};
    padding: 15px 15px 15px 40px;
    position: relative;

    ${({ readOnly, theme }) => readOnly && `
        background-color: ${theme.mode === ColorMode.light ? theme.colors.light.grey : theme.colors.dark.eclipseDark};
        cursor: not-allowed;
        opacity: 0.4;

        input {
            pointer-events: none;
        }
    `}

    input,
    textarea {
        background-color: transparent;
        color: ${({ theme }) =>
        theme.mode === ColorMode.light ? theme.colors.light.brandBlack : theme.colors.dark.white};
    }

    input::placeholder,
    textarea::placeholder {
        ${{ ...fontsConfig.paragraph }};

        color: ${({ theme }) =>
            theme.mode === ColorMode.light
                ? theme.colors.light.mediumGrey
                : theme.colors.dark.white};
    }
`;

const InputContainer = styled.div<{ isFocused: boolean; hasError: boolean }>`
    &:not(:last-of-type) {
        margin-bottom: 15px;
    }

    svg path {
        fill: ${({ theme }) => theme.colors.light.mediumGrey};
    }

    ${({ hasError, theme }) =>
        hasError &&
        `
        ${InputWrapper} {
       border: 1px solid ${
           theme.mode === ColorMode.light
               ? theme.colors.light.caution
               : theme.colors.dark.cautionNight
       };
       }

    ${Label} {
        color: ${
            theme.mode === ColorMode.light
                ? theme.colors.light.caution
                : theme.colors.dark.cautionNight
        };
    }
`};

    ${({ isFocused, theme }) =>
        isFocused &&
        `
        svg path {
            fill: ${theme.colors.light.brandAccent};
        }

        ${Label} {
            color: ${theme.colors.light.brandAccent};
        }
    `}
`;

interface InputProps {
    type: 'text' | 'password' | 'email' | 'textarea';
    inputName: string;
    label: string;
    placeholder: string;
    icon: ReactNode;
    control: any;
    required?: boolean;
    readOnly?: boolean;
}

const Input = ({
    type,
    inputName,
    label,
    placeholder,
    icon,
    control,
    required = false,
    readOnly = false,
}: InputProps) => {
    const {
        field,
        fieldState: { invalid, error },
    } = useController({
        name: inputName,
        control,
        rules: { required },
        defaultValue: '',
    });
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <InputContainer hasError={invalid} isFocused={isFocused}>
            <Label htmlFor={inputName}>{label}</Label>
            <InputWrapper readOnly={readOnly}>
                {type === 'textarea' ? (
                    <textarea
                        {...field}
                        placeholder={placeholder}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                ) : (
                    <input
                        {...field}
                        type={type}
                        readOnly={readOnly}
                        placeholder={placeholder}
                        onFocus={readOnly ? undefined : handleFocus}
                        onBlur={readOnly ? undefined : handleBlur}
                    />
                )}
                <IconWrapper>{icon}</IconWrapper>
            </InputWrapper>
            {error && (
                <Typography variant="caption" color="light.caution">
                    {error.message}
                </Typography>
            )}
        </InputContainer>
    );
};

export default Input;
