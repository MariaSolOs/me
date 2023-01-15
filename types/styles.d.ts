import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            purple: string;
        };
        breakpoints: {
            sm: string;
            md: string;
        };
    }
}
