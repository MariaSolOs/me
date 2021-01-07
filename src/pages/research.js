import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Gallery from '../components/gallery';

const GalleryCard = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .picture {
        transition: 300ms;
        &:hover { 
            transform: scale(1.05); 
        }
    }

    @media(max-width: 768px) {
        width: 90%;
        margin: 15vh auto 0;
    }
`

const Caption = styled.p`
    margin: 50px 0 0;
    color: #000;
    font-size: 1.2rem;
    text-align: center;

    @media(max-width: 768px) {
        font-size: 0.9rem;
    }

    a {
        color: #8B008B;
        text-decoration: none;
    }
`

const ResearchPage = ({ data }) => {
    return (
        <Layout>
            <Gallery>
                <GalleryCard>
                    <Img 
                    fixed={data.fields.childImageSharp.fixed}
                    alt="FUSRP group"
                    className="picture"/>
                    <Caption>
                        I was part of the
                        <a 
                        href="http://www.fields.utoronto.ca/activities/19-20/2019-fusrp" 
                        target="_blank" 
                        rel="noopener noreferrer"> Fields 
                        Undergraduate Summer Research Program</a> in 2019. Supervised by 
                        David Kreindler, I looked into similarity measures to analyze 
                        mood symptom time-series data. 
                    </Caption>
                    <Caption>
                        During the summer of 2020 I worked with 
                        <a 
                        href="https://www.cs.mcgill.ca/~prakash/" 
                        target="_blank" 
                        rel="noopener noreferrer"> Prakash Panangaden </a>and 
                        explored bisimulation metrics for reinforcement 
                        learning. 
                    </Caption>
                </GalleryCard>
            </Gallery>
        </Layout>
    );
}

export const query = graphql`
    query {
        fields: file(relativePath: { eq: "images/fields.jpeg" }) {
            childImageSharp {
                fixed( width: 400 ) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default ResearchPage;