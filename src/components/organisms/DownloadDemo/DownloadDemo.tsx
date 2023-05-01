import { props } from '@styled-system/should-forward-prop';
import { downloadFile, getOperatingSystem } from '@utils/helpers';
import { useI18next } from 'gatsby-plugin-react-i18next';
import React, { cloneElement, ReactElement, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Box from '@components/atoms/Box';
import Button, { ButtonSizes } from '@components/atoms/Button/Button';
import Dropdown, { DropdownButton, DropdownItem } from '@components/atoms/Dropdown';
import { DropdownItemList } from '@components/atoms/Dropdown/Dropdown';
import Typography from '@components/atoms/Typography';

import DDArrow from '@components/molecules/Icons/DDArrow';
import Linux from '@components/molecules/Icons/Linux';
import MacOS from '@components/molecules/Icons/MacOS';
import Windows from '@components/molecules/Icons/Windows';

export enum ISupportedPlatformOS {
    windows = 'windows',
    appleIntel = 'osx',
    osx = 'osx',
    linux = 'linux',
}

export type IPlatformOS = (ISupportedPlatformOS & 'appleSilicon') | 'unix' | 'android' | 'iOS';

export type IPlatformData = {
    key: string;
    icon: ReactElement;
    name: string;
    link: string;
    versions?: string | null;
};

export type IPlatformDataList = {
    [K in ISupportedPlatformOS]: IPlatformData;
};

export const platformDownloadData: IPlatformDataList = {
    windows: {
        key: 'windows',
        icon: <Windows />,
        name: 'Windows',
        link: `/downloads/client_portable_windows_x64.zip`,
        versions: '7, 8, 8.1, 10, 11',
    },
    osx: {
        key: 'osx',
        icon: <MacOS />,
        name: 'MacOS',
        link: `/downloads/client_portable_macos_x64.zip`,
        versions: 'Yosemite и выше.',
    },
    linux: {
        key: 'linux',
        icon: <Linux />,
        name: 'Linux',
        link: `/downloads/client_portable_linux_x64.zip`,
        versions: null,
    },
};

const StyledDDButton = styled(DropdownButton).withConfig({
    shouldForwardProp: (prop) => ![...props, 'isOpen', 'size'].includes(String(prop)),
})<{ isOpen: boolean; size?: ButtonSizes }>`
    white-space: nowrap;
    border-radius: 0 6px 6px 0;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    max-height: 50px;
    height: 100%;
    padding: 20px 15px;
    background-color: ${({ theme }) => theme.colors.light.brandAccent};

    svg {
        transform: rotate(${({ isOpen }) => (isOpen ? -180 : 0)}deg);
        transition: transform 0.2s ease-in-out;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.9;

        background-color: #294fe5;
    }
`;

const StyledDropdownItem = styled(DropdownItem)`
    align-items: center;
    display: flex;

    svg path {
        fill: ${({ theme }) => theme.colors.light.brandAccent};
    }

    &:hover {
        svg path {
            fill: ${({ theme }) => theme.colors.commons.white};
        }

        p {
            color: ${({ theme }) => theme.colors.commons.white};
        }
    }
`;

const StyledButton = styled(Button)`
    align-items: center;
    border-radius: 6px 0 0 6px;
    display: flex;
    font-size: 20px;
    gap: 10px;
    max-height: 50px;
`;

const DownloadDemo = ({ size }: { size?: ButtonSizes }) => {
    const { t } = useTranslation();
    const [currentOs, setCurrentOs] = React.useState<ISupportedPlatformOS | null>(null);
    const { navigate } = useI18next();

    const handleDownload = ({ link, key }: { link: string; key: string }) => {
        downloadFile(link);
        navigate(`/downloads?success_os=${key}`);
    };

    useLayoutEffect(() => {
        const { os } = getOperatingSystem();

        setCurrentOs(os as ISupportedPlatformOS);
    }, []);

    if (!currentOs) return null;

    const {
        key: detectedKey,
        icon,
        link: detectedLink,
    } = platformDownloadData[currentOs as ISupportedPlatformOS];

    return (
        <Box display="flex" alignItems="center">
            <StyledButton onClick={() => handleDownload({ link: detectedLink, key: detectedKey })}>
                {cloneElement(icon, { style: { width: '1em', height: '1em' } })}
                <Typography variant="accent" color="commons.white" mr={5}>
                    {t('shared.download')}
                </Typography>
            </StyledButton>
            <Dropdown>
                {({ isOpen, onClose }) => (
                    <>
                        <StyledDDButton isOpen={isOpen} size={size}>
                            <DDArrow size="small" />
                        </StyledDDButton>
                        <DropdownItemList>
                            {Object.values(platformDownloadData).map((downloadLink) => (
                                <a
                                    key={downloadLink.name}
                                    href={downloadLink.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    download
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onClose();
                                        handleDownload({
                                            link: downloadLink.link,
                                            key: downloadLink.key,
                                        });
                                    }}
                                >
                                    <StyledDropdownItem as="div">
                                        {downloadLink.icon}
                                        <Typography
                                            variant="paragraph"
                                            color="commons.black"
                                            ml={15}
                                        >
                                            {downloadLink.name}
                                        </Typography>
                                    </StyledDropdownItem>
                                </a>
                            ))}
                        </DropdownItemList>
                    </>
                )}
            </Dropdown>
        </Box>
    );
};

export default DownloadDemo;
