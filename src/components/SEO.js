import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata;
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname}`
    }

    return (
        <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
        </Helmet>
    );
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteUrl: url
            }
        }   
    }
`;

export default SEO;