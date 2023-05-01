import { discount, ISubscriptions } from '@components/sections/Prices';
import { getDiscountPrice, hexToRGB } from '@utils/helpers';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ColorMode } from '@providers/ColorModeProvider/ColorModeContext';

import { useColorMode } from '@hooks';

import colors from '@theme/configs/colors';

import Box from '@components/atoms/Box';
import Card from '@components/atoms/Card';
import LinkAsButton from '@components/atoms/LinkAsButton';
import Typography from '@components/atoms/Typography';
import { FONT_BOLD } from '@components/atoms/Typography/Typography';

import TariffImage from '@components/molecules/TariffCard/TariffImage';
import TariffIncludes from '@components/molecules/TariffCard/TariffIncludes';

type ITariffInclude = {
    profiles: number;
    users: number;
    api: boolean;
};

type ITariffPrice = {
    monthly: number;
    mon3: number;
    mon6: number;
    mon12: number;
    userStep?: number;
    profileStep?: number;
};

interface ITariff {
    key: string;
    name: string;
    includes: ITariffInclude;
    price: ITariffPrice;
}

const TariffCard = ({
    tariff,
    delay,
    activePeriod,
}: {
    tariff: ITariff;
    delay: number;
    activePeriod: ISubscriptions;
}) => {
    const { t } = useTranslation();
    const { colorMode } = useColorMode();
    const [additions, setAdditions] = useState(0);
    const { key, includes, price } = tariff;
    const [youSave, setYouSave] = useState<any>();
    const { tablet } = useBreakpoint();

    const period = activePeriod === 'monthly' ? 1 : parseInt(activePeriod.replace('mon', ''), 10);

    useEffect(() => {
        setYouSave(
            Math.round(getDiscountPrice(price[activePeriod], parseInt(discount[activePeriod], 10))),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activePeriod]);

    const onUpdate = ({
        userAmounts,
        profileAmounts,
    }: {
        userAmounts: number;
        profileAmounts: number;
    }) => {
        const { userStep, profileStep } = price;
        let priceWithAdditions = price[activePeriod];
        let priceForAdditionalUsersDiscounted = 0;
        let priceForAdditionalProfilesDiscounted = 0;

        if (userStep) {
            const additionalUsers = userAmounts - includes.users;

            // Price for period with additions
            const priceForAdditionalUsers = additionalUsers * userStep * period;

            priceForAdditionalUsersDiscounted =
                priceForAdditionalUsers -
                Math.round(
                    getDiscountPrice(priceForAdditionalUsers, parseInt(discount[activePeriod], 10)),
                );

            priceWithAdditions += priceForAdditionalUsers;
        }

        if (profileStep) {
            // Variables
            const additionalProfiles = profileAmounts - includes.profiles;

            // Price for period with additions
            const priceForAdditionalProfiles = additionalProfiles * profileStep * period;

            priceForAdditionalProfilesDiscounted =
                priceForAdditionalProfiles -
                Math.round(
                    getDiscountPrice(
                        priceForAdditionalProfiles,
                        parseInt(discount[activePeriod], 10),
                    ),
                );

            priceWithAdditions += priceForAdditionalProfiles;
        }

        // Price for period with additions and discount
        const priceWithAdditionsAndDiscount =
            priceWithAdditions -
            Math.round(getDiscountPrice(priceWithAdditions, parseInt(discount[activePeriod], 10)));

        setAdditions(priceForAdditionalUsersDiscounted + priceForAdditionalProfilesDiscounted);

        setYouSave(Math.round(priceWithAdditions - priceWithAdditionsAndDiscount));
    };

    return (
        <Card
            minWidth={240}
            width={tablet ? '100%' : '240px'}
            data-aos="fade-right"
            data-aos-delay={delay}
        >
            {activePeriod !== ISubscriptions.monthly && youSave && (
                <Box
                    position="absolute"
                    top={0}
                    right={0}
                    p="13px 20px"
                    borderRadius="0 6px"
                    backgroundColor={
                        colorMode === ColorMode.light
                            ? `rgba(${hexToRGB(colors.light.success)}, 0.1)`
                            : `rgba(${hexToRGB(colors.dark.successNight)}, 0.1)`
                    }
                    display="flex"
                    alignItems="flex-end"
                    flexDirection="column"
                >
                    <Typography
                        variant="caption"
                        color={{ light: 'light.success', dark: 'dark.successNight' }}
                    >
                        {t('prices.youSave')}
                    </Typography>
                    <Typography
                        variant="accent"
                        fontWeight={FONT_BOLD}
                        color={{ light: 'light.success', dark: 'dark.successNight' }}
                    >
                        - {youSave}&euro;
                    </Typography>
                </Box>
            )}

            <TariffImage tariff={key} />

            {/* Tariff name */}
            <Typography
                variant="h4"
                fontWeight={FONT_BOLD}
                color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                mb={20}
                transformText="uppercase"
            >
                {t(`prices.${key}`)}
            </Typography>

            {/* Tariff prices */}
            <Box display="flex" my="20px" alignItems="center">
                <Typography
                    variant="h3"
                    lineHeight={1}
                    fontSize={30}
                    color={{ light: 'light.brandBlack', dark: 'dark.white' }}
                >
                    {!tariff.price.userStep && !tariff.price.profileStep && price[activePeriod]}
                    {(!!tariff.price.userStep || !!tariff.price.profileStep) &&
                        Math.round(price[activePeriod] + additions)}
                    &euro;
                </Typography>
                {/* {key === 'ultimate' ? Math.round(discountedBasePrice[activePeriod] + tariffPrice[activePeriod]) : Math.round(tariffPrice[activeTariff]) }&euro; */}
                <Typography
                    variant="caption"
                    as="span"
                    color={{ light: 'light.darkGrey', dark: 'dark.lightGrey' }}
                    ml={5}
                >
                    {t('prices.every')}
                    <br />{' '}
                    {activePeriod !== ISubscriptions.monthly &&
                        activePeriod.replace('mon', '')}{' '}
                    {t('prices.month')}
                </Typography>
            </Box>

            {/* Tariff includes */}
            <TariffIncludes
                userStep={tariff.price.userStep}
                profileStep={tariff.price.profileStep}
                profiles={includes.profiles}
                users={includes.users}
                apiIncluded={includes.api}
                onPriceUpdate={onUpdate}
            />

            {/* Tariff button */}
            <LinkAsButton
                to="/registration"
                /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                // @ts-ignore
                mt={10}
                style={{ display: 'block', textAlign: 'center' }}
                variant="secondary"
                width="100%"
                // disabled={appConfig.beta.isActive}
            >
                {t('shared.getStarted')}
            </LinkAsButton>
        </Card>
    );
};

export default TariffCard;
