import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import type { DocumentContext } from 'next/document';

export default class CustomDocument extends Document {
    static async getInitialProps(context: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = context.renderPage;

        try {
            context.renderPage = () => originalRenderPage({
                enhanceApp: App => props => sheet.collectStyles(<App { ...props } />)
            });

            const initialProps = await Document.getInitialProps(context);

            return {
                ...initialProps,
                styles: (
                    <>  
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            }
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="author" content="Maria Solano" />
                    <meta property="og:type" content="website" />
                    <link rel="canonical" href={process.env.SITE_URL} />

                    {/* TODO: Add PWA stuff */}

                    {/* Main font */}
                    <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Raleway:wght@400;600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}