/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { Theme } from '@theme/configs';

type CustomTheme = typeof theme;

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
