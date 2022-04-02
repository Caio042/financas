import 'styled-components';

declare module 'styled-components' {
    export interface DefaltTheme {
        title: string,
    
        colors: {
            primary: string,
            secondary: string,
            tertiary: string,
    
            text: string,
            black: string,
            gray: string,
    
            success: string,
            info: string,
            warning: string
        }
    }
};