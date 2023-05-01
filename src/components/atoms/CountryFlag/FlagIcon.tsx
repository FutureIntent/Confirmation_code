import Flags, { CountryCode } from 'country-flag-icons/react/3x2';

interface FlagIconProps {
    countryCode: string;
}

const FlagIcon = ({ countryCode }: FlagIconProps) => {
    const Flag = Flags[countryCode as CountryCode];

    return <Flag title={countryCode} />;
};

export default FlagIcon;
