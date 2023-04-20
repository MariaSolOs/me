import type { FC } from 'react';

import NextHead from 'next/head';

type Props = {
    title?: string;
    description?: string;
};

const Head: FC<Props> = (props) => (
    <NextHead>
        <title>{props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" property="og:title" content={props.title} />
        <meta name="description" content={props.description} />
        <meta name="og:description" property={props.description} />
        <meta property="og:site_name" content="Maria Solano" />
        <meta property="og:url" content={process.env.SITE_URL} />
    </NextHead>
);

Head.defaultProps = {
    title: 'Maria Solano',
    description: 'SWE at Microsoft, McGill alumni, and voracious learner.'
};

export default Head;
