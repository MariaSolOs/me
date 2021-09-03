import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import type { AppProps } from 'next/app';
import type { DefaultTheme } from 'styled-components';

import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import SiteBackground from 'components/SiteBackground';

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
        link: '#4A4E69'
    }
}

const App = (props: AppProps) => {
    const { Component, pageProps } = props;

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <GlobalStyle />
            <Navbar />
            <SiteBackground>
                <Component { ...pageProps } />
            </SiteBackground>
            <Footer />
        </ThemeProvider>
    );
}

export default App
