import '@emotion/react';

import { icon } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '@emotion/react' {
  export interface Theme {
    font: {
      YoonGothicBold: string | undefined;
    };
    color: {
      white: string;
      black: string;
      skyblue: {
        one: string;
        two: string;
        three: string;
      };
    };
    icon: typeof icon;
  }
}
