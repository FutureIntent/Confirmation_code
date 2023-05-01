import styled from 'styled-components';

import { fontsConfig } from '@components/atoms/Typography/Typography';

const Label = styled.label`
    ${{ ...fontsConfig.caption }};

    color: ${({ theme }) => theme.colors.light.mediumGrey};
`;

export default Label;
