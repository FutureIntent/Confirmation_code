import React from 'react';
import styled from 'styled-components';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import Box from '@components/atoms/Box';
import Typography from '@components/atoms/Typography';

import { platformDownloadData } from '@components/organisms/DownloadDemo/DownloadDemo';

const Link = styled.a`
    border: 1px solid
        ${({ theme }) =>
            theme.mode === ColorMode.light
                ? theme.colors.light.brandAccent
                : theme.colors.dark.brandAccentNight};
    border-radius: ${({ theme }) => theme.space['2xs']};
    display: flex;
    padding: 20px;

    &:not(:last-of-type) {
        margin-bottom: 5px;
    }

    svg path {
        fill: ${({ theme }) => theme.colors.light.brandAccent};
    }

    &:hover {
        opacity: 0.75;
    }
`;

const DownloadPlatform = ({ platform }: { platform: typeof platformDownloadData.windows }) => (
    <Link href={platform.link} target="_blank">
        {React.cloneElement(platform.icon, { size: 'large' })}
        <Box ml={10}>
            <Typography variant="accent" color={{ light: 'light.brandBlack', dark: 'dark.white' }}>
                {platform.name}
            </Typography>
            <Typography
                variant="caption"
                color={{ light: 'light.mediumGrey', dark: 'dark.lightGrey' }}
            >
                {platform.versions}
            </Typography>
        </Box>
    </Link>
);

export default DownloadPlatform;
