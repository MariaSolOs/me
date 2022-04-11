import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import type { AppProps } from 'next/app';
import type { DefaultTheme } from 'styled-components';

import Head from 'components/Head';
import SiteBackground from 'components/SiteBackground';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

// Fixes the huge icon initial flash
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; 
config.autoAddCss = false;

const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    body {
        font-family: 'Raleway', sans-serif;
        line-height: 1.5;
    }
`;

const theme: DefaultTheme = {
    colors: {
        purple: '#4A4E69'
    },
    breakpoints: {
        sm: '450px',
        md: '900px'
    }
}

const App = (props: AppProps) => {
    const { Component, pageProps } = props;

    return (
        <ThemeProvider theme={theme}>
            <Head />
            <GlobalStyle />
            <SiteBackground>
                <Navbar />
                <Component { ...pageProps } />
                <Footer />
            </SiteBackground>
        </ThemeProvider>
    );
}

export default App;