import Box from "@components/atoms/Box";
import Typography from "@components/atoms/Typography";
import CreditCard from "@components/molecules/Icons/CreditCard";
import CryptoCoins from "@components/molecules/Icons/CryptoCoins";
import PayPal from "@components/molecules/Icons/PayPal";
import YandexMoney from "@components/molecules/Icons/YandexMoney";
import QiwiWallet from "@components/molecules/Icons/QiwiWallet";
import WeChat from "@components/molecules/Icons/WeChat";
import styled from "styled-components";
import { cloneElement } from "react";
import { getClampValue } from "@utils/helpers";

const supportedSystems = [
    {
        name: 'Credit Cards (+ Russia)',
        icon: <CreditCard />,
    },
    {
        name: 'Crypto Currencies',
        icon: <CryptoCoins />,
    },
    {
        name: 'PayPal',
        icon: <PayPal />,
    },
    {
        name: 'Qiwi Wallet',
        icon: <QiwiWallet />,
    },
    {
        name: 'WeChat',
        icon: <WeChat />,
    },
    {
        name: 'YooMoney',
        icon: <YandexMoney />,
    },
];

const Wrapper = styled(Box)`
    background: linear-gradient(180deg, rgba(0, 91, 237, 0.1) 0%, rgba(120, 55, 234, 0.1) 100%);
`;

const PaymentsSupported = () => (
    <Wrapper borderRadius={6} overflow="hidden" p="15px 20px" display="grid" gridTemplateColumns={{ _: '1fr 1fr', tablet: '1fr 1fr 1fr', desktop: 'repeat(auto-fit, minMax(120px, 170px))'}} gridColumnGap={10} gridRowGap={20}>
        {supportedSystems.map((system) => (
            <Box key={system.name} display="flex" alignItems="center">
                <Box width={getClampValue('30px', '50px')}>
                    {cloneElement(system.icon, { size: 'fullWidth'})}
                </Box>
                <Typography variant="paragraph" color={{ light: 'light.brandBlack', dark: 'light.mediumGrey' }} ml={10}>{system.name}</Typography>
            </Box>
                ))}
    </Wrapper>
    )

export default PaymentsSupported;
