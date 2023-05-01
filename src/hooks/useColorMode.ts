import { useContext } from 'react';

import ColorModeContext, {
    ColorModeContextType,
} from '@providers/ColorModeProvider/ColorModeContext';

export const useColorMode = (): ColorModeContextType => useContext(ColorModeContext);
