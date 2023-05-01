import { countries } from 'country-flag-icons';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import FlagIcon from '@components/atoms/CountryFlag/FlagIcon';

const FlagWrapper = styled.div`
    height: 1rem;
    line-height: 1;
    width: 1rem;
    ${space};

    svg {
        height: 100%;
        width: 100%;
    }
`;

interface CountryFlagProps extends SpaceProps {
    locale?: string;
    iso?: string;
}

const CountryFlag = ({ locale, iso, ...rest }: CountryFlagProps): ReactElement | null => {
    let countryCode = null;

    if (locale) {
        countryCode = locale;
    }

    if (iso) {
        countryCode = iso;
    }

    if (!countryCode || !countries.includes(countryCode)) {
        return null;
    }

    return (
        <FlagWrapper as="span" {...rest}>
            <FlagIcon countryCode={countryCode} />
        </FlagWrapper>
    );
};

export default CountryFlag;
