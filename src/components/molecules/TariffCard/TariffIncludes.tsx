import { useEffect, useRef, useState } from 'react';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import { useColorMode } from '@hooks';

import colors from '@theme/configs/colors';

import Box from '@components/atoms/Box';
import Hr from '@components/atoms/Hr';
import Typography from '@components/atoms/Typography';

import TariffCheck from '@components/molecules/Icons/TariffCheck';
import TariffExclude from '@components/molecules/Icons/TariffExclude';

// const Wrapper = styled(Box)`
//     ${appConfig.beta.isActive && 'pointer-events: none;'}
// `;

const TariffIncludes = ({
    userStep,
    profileStep,
    profiles,
    users,
    apiIncluded = false,
    onPriceUpdate = () => {},
}: {
    userStep?: number;
    profileStep?: number;
    profiles: number;
    users: number;
    apiIncluded?: boolean;
    onPriceUpdate?: any;
}) => {
    const { colorMode } = useColorMode();
    const [profileAmounts, setProfileAmount] = useState<number>(profiles);
    const [userAmounts, setUserAmount] = useState<number>(users);
    const usersRef = useRef<HTMLDivElement>(null);
    const profilesRef = useRef<HTMLDivElement>(null);
    const withCalculator = !!userStep || !!profileStep;

    const addUsers = () => setUserAmount((prev) => prev + 1);
    const decreaseUsers = () => setUserAmount((prev) => (prev > users ? prev - 1 : users));
    const addProfiles = () => setProfileAmount((prev) => prev + 10);
    const decreaseProfiles = () => setProfileAmount((prev) => (prev > 1009 ? prev - 10 : 0));

    const setUsers = () => {
        const newValue = usersRef?.current?.innerText || userAmounts.toString();
        const value = parseInt(newValue, 10);

        setUserAmount(value >= users ? value : users);
    };
    const setProfiles = () => {
        const newValue = profilesRef?.current?.innerText || profileAmounts.toString();
        const value = parseInt(newValue, 10);

        setProfileAmount(value >= profiles ? value : profiles);
    };

    useEffect(() => {
        if (withCalculator && usersRef.current?.innerText && profilesRef.current?.innerText) {
            onPriceUpdate({ userAmounts, profileAmounts });
        }
    }, [profileAmounts, userAmounts]);

    useEffect(() => {
        if (withCalculator) {
            onPriceUpdate({ userAmounts, profileAmounts });
        }
    });

    return (
        <Box
            backgroundColor={
                colorMode === ColorMode.light ? colors.light.lightGrey : colors.dark.eclipseDark
            }
            borderRadius={6}
            p="15px 20px"
        >
            <Box display="flex" justifyContent="space-between">
                <Typography
                    variant="paragraph"
                    color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                >
                    Profiles:
                </Typography>
                <Box display="flex" alignItems="center">
                    {!!profileStep && (
                        <Box
                            cursor={profileAmounts > 1009 ? 'pointer' : 'default'}
                            mr={5}
                            width={24}
                            height={24}
                            display={profileAmounts > 1009 ? 'flex' : 'none'}
                            justifyContent="center"
                            alignItems="center"
                            borderRadius={4}
                            backgroundColor={
                                colorMode === ColorMode.light
                                    ? colors.light.grey
                                    : colors.dark.eclipseLight
                            }
                            color={
                                colorMode === ColorMode.light
                                    ? colors.light.brandAccent
                                    : colors.dark.brandAccentNight
                            }
                            onClick={decreaseProfiles}
                        >
                            <Typography
                                variant="h3"
                                lineHeight={1}
                                color={{
                                    light: 'light.brandAccent',
                                    dark: 'dark.brandAccentNight',
                                }}
                            >
                                -
                            </Typography>
                        </Box>
                    )}
                    <Typography
                        as="div"
                        variant="accent"
                        color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                    >
                        <div
                            contentEditable={withCalculator}
                            suppressContentEditableWarning={withCalculator}
                            ref={profilesRef}
                            onBlur={setProfiles}
                        >
                            {profileAmounts}
                        </div>
                    </Typography>
                    {!!profileStep && (
                        <Box
                            cursor="pointer"
                            ml={5}
                            width={24}
                            height={24}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            borderRadius={4}
                            backgroundColor={
                                colorMode === ColorMode.light
                                    ? colors.light.grey
                                    : colors.dark.eclipseLight
                            }
                            color={
                                colorMode === ColorMode.light
                                    ? colors.light.brandAccent
                                    : colors.dark.brandAccentNight
                            }
                            onClick={addProfiles}
                        >
                            <Typography
                                variant="h3"
                                lineHeight={1}
                                color={{
                                    light: 'light.brandAccent',
                                    dark: 'dark.brandAccentNight',
                                }}
                            >
                                +
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>
            <Hr my={10} />
            <Box display="flex" justifyContent="space-between">
                <Typography
                    variant="paragraph"
                    color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                >
                    Users:
                </Typography>
                <Box display="flex" alignItems="center">
                    {!!userStep && (
                        <Box
                            cursor={userAmounts > users ? 'pointer' : 'default'}
                            mr={5}
                            width={24}
                            height={24}
                            display={userAmounts > users ? 'flex' : 'none'}
                            justifyContent="center"
                            alignItems="center"
                            borderRadius={4}
                            backgroundColor={
                                colorMode === ColorMode.light
                                    ? colors.light.grey
                                    : colors.dark.eclipseLight
                            }
                            onClick={decreaseUsers}
                        >
                            <Typography
                                variant="h3"
                                lineHeight={1}
                                color={{
                                    light: 'light.brandAccent',
                                    dark: 'dark.brandAccentNight',
                                }}
                            >
                                -
                            </Typography>
                        </Box>
                    )}
                    <Typography
                        variant="accent"
                        color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                    >
                        <div
                            contentEditable={withCalculator}
                            suppressContentEditableWarning={withCalculator}
                            ref={usersRef}
                            onBlur={setUsers}
                        >
                            {userAmounts}
                        </div>
                    </Typography>
                    {!!userStep && (
                        <Box
                            cursor="pointer"
                            ml={5}
                            width={24}
                            height={24}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            borderRadius={4}
                            backgroundColor={
                                colorMode === ColorMode.light
                                    ? colors.light.grey
                                    : colors.dark.eclipseLight
                            }
                            onClick={addUsers}
                        >
                            <Typography
                                variant="h3"
                                lineHeight={1}
                                color={{
                                    light: 'light.brandAccent',
                                    dark: 'dark.brandAccentNight',
                                }}
                            >
                                +
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>
            <Hr my={10} />
            <Box display="flex" justifyContent="space-between">
                <Typography
                    variant="paragraph"
                    color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                >
                    Api:
                </Typography>
                <Box>
                    {apiIncluded ? (
                        <TariffCheck color="transparent" />
                    ) : (
                        <TariffExclude color="transparent" />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default TariffIncludes;
