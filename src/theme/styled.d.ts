import 'styled-components/native';
import { Theme } from './index';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
} 