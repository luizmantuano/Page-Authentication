import { colors } from './colors';

export const theme = {
  colors: {
    primary: colors.brand.purple[500],
    background: '#FFFFFF',
    gray: '#757575',
    bottomTabs: {
      background: '#1C1C1E',
      active: '#FFFFFF',
      inactive: '#757575',
      border: '#2C2C2E'
    },
    ...colors
  }
};

export type Theme = typeof theme;
export default theme; 