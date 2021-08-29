import Head from 'next/head';

type Props = {
    title: string;
    description: string;
    image?: StaticImageData;
}

const PageHead = (props: Props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="og:title" property="og:title" content={props.title} />
            <meta name="description" content={`Maria José Solano: ${props.description}`} />
            <meta name="og:description" property="og:description" content={`Maria José Solano: ${props.description}`} />
            <meta property="og:site_name" content="Maria José Solano" />
            <meta property="og:url" content={process.env.SITE_URL} />  
            {props.image && 
                <>
                    <meta property="og:image" content={props.image.src} />
                    <meta property="og:image:secure_url" content={props.image.src} />
                </>}
        </Head>
    );
}

export default PageHead;