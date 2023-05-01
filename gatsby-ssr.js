import React from 'react';
import { PageContextProvider } from './src/providers/PageContext';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
                          <script key="code-1" async src="https://www.googletagmanager.com/gtag/js?id=G-01B4XX33DE" />,
                          <script key="code-2" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());

                              gtag('config', 'AW-10870991167');
                              gtag('config', 'G-01B4XX33DE');`
                          }} />
                      ])
}

/**
 * Wrap all pages with a Translation provider and set the language on SSR time
 */
export const wrapPageElement = ({ element, props }) => (
    <PageContextProvider value={props.pageContext}>
        {element}
        <script
            async
            id="ze-snippet"
            src="https://static.zdassets.com/ekr/snippet.js?key=ca9b9f8f-4464-4e4a-b446-828f74043ff0"
        >
            {' '}
        </script>
    </PageContextProvider>
);
