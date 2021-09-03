import Head from 'next/head';

type Props = {
    description: string;
    image?: StaticImageData;
}

const PageHead = (props: Props) => {
    return (
        <Head>
            <title>Maria José Solano</title>
            <meta name="og:title" property="og:title" content="Maria José Solano" />
            <meta name="description" content={props.description} />
            <meta name="og:description" property="og:description" content={props.description} />
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