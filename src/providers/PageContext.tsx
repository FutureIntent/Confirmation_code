import React, { useEffect, useState } from 'react';

const PageContext = React.createContext({
    language: 'ru',
    i18n : {
        originalPath: '/'
    }
});

export const PageContextProvider = ({ pageContext, children }: any) => {
    const [pageContextValue, setPageContextValue] = useState(pageContext);

    useEffect(() => {
        setPageContextValue(pageContext)
        // eslint-disable-next-line
    }, []);

    return <PageContext.Provider value={pageContextValue}>{children}</PageContext.Provider>;
};

export const usePageContext = () => React.useContext(PageContext);
