import React from 'react';
import Img from 'gatsby-image';
import {graphql} from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Gallery from '../components/gallery';

const GalleryCard = styled.div`
    width: 35%;
    margin: 0 7.5%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .project-image {
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
    margin: 20px 0 0;
    color: #000;
    font-size: 1.2rem;
    text-align: center;

    a {
        color: #E0115F;
        text-decoration: none;
    }
`

const ProjectsPage = ({data}) => {
    return (
        <Layout>
            <Gallery>
                <GalleryCard>
                    <Img 
                    fixed={data.borel.childImageSharp.fixed}
                    alt="Borel logo"
                    className="project-image"/>
                    <Caption>
                        <a href="https://borel.herokuapp.com/" 
                        target="_blank" 
                        rel="noopener noreferrer">Borel</a> is a small application 
                        for university note-takers.
                        Although it is still in its early stages, I want Borel to 
                        become a lecture notes marketplace.
                    </Caption>
                </GalleryCard>
                <GalleryCard>
                    <Img 
                    fixed={data.ramble.childImageSharp.fixed}
                    alt="Ramble"
                    className="project-image"/>
                    <Caption>
                        <a href="https://www.experienceramble.com/" 
                        target="_blank" 
                        rel="noopener noreferrer">Ramble</a> allows anyone to 
                        create and attend a wide range of unique experiences.
                        I built Ramble using a MERN stack, Stripe for payment
                        managament, Socket.IO for messaging and live updates, among other 
                        features.
                    </Caption>
                </GalleryCard>
            </Gallery>
        </Layout>
    );
}

export const query = graphql`
    query {
        borel: file(relativePath: { eq: "images/borel.png" }) {
            childImageSharp {
                fixed( width: 350 ) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        
        ramble: file(relativePath: { eq: "images/ramble.png" }) {
            childImageSharp {
                fixed( width: 350 ) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default ProjectsPage;