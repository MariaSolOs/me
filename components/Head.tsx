import NextHead from 'next/head';

const Head = () => (
    <NextHead>
        <title>Maria Solano</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" property="og:title" content="Maria Solano" />
        <meta name="description" content="SWE at Microsoft, McGill alumni, and voracious learner." />
        <meta name="og:description" property="SWE at Microsoft, McGill alumni, and voracious learner." />
        <meta property="og:site_name" content="Maria Solano" />
        <meta property="og:url" content={process.env.SITE_URL} />  
    </NextHead>
);

export default Head;