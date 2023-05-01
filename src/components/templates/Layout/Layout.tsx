import { ReactElement, ReactNode } from 'react';
import { CookieConsent } from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

import ThemeProvider from '@providers/ThemeProvider';

import GlobalStyle from '@theme/GlobalStyles';

import Button from '@components/atoms/Button';
import { PageTransitionAnimation } from '@components/atoms/PageTransitionAnimation/PageTransitionAnimation';

import Footer from '@components/templates/Footer';
import Header from '@components/templates/Header';

type LayoutProps = {
    hasBurger?: boolean;
    children: ReactNode;
};

const Page = styled.div`
    flex: 1;
    margin: var(--header-height) auto 0;
    min-height: calc(100vh - var(--header-height) - var(--footer-height));

    width: 100%;
`;

const Layout = ({ hasBurger = false, children }: LayoutProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <ThemeProvider>
            <>
                <GlobalStyle />

                <Header hasBurger={hasBurger} />
                <Page>
                    <PageTransitionAnimation>{children}</PageTransitionAnimation>
                </Page>
                <CookieConsent
                    buttonClasses="cc-btn"
                    containerClasses="cc-container"
                    contentClasses="cc-content"
                    disableStyles
                    location="bottom"
                    buttonText={t('Ok')}
                    cookieName="cookiePolicy"
                    expires={150}
                    customButtonProps={{ variant: 'beta', ml: 30 }}
                    ButtonComponent={Button}
                >
                    {t('weUseCookie')}{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="cookie policy"
                        href="/cookie-policy"
                    >
                        {t('here')}
                    </a>
                    .
                </CookieConsent>
                <Footer />
                <ToastContainer autoClose={9000} theme="colored" closeOnClick />
            </>
        </ThemeProvider>
    );
};

export default Layout;
