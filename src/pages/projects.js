import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Gallery from '../components/gallery';

const GalleryCard = styled.div`
    width: 35%;
    margin: 0 4%;
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
    font-size: 1.1rem;
    text-align: center;

    @media(max-width: 768px) {
        font-size: 0.9rem;
    }

    a {
        color: #8B008B;
        text-decoration: none;
    }
`

const ProjectsPage = ({ data }) => {
    return (
        <Layout>
            <Gallery>
                <GalleryCard>
                    <Img 
                    fixed={data.borel.childImageSharp.fixed}
                    alt="Borel logo"
                    className="project-image"/>
                    <Caption>
                        <a 
                        href="https://borel.herokuapp.com/" 
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
                        <a 
                        href="https://www.experienceramble.com/" 
                        target="_blank" 
                        rel="noopener noreferrer">Ramble</a> allows anyone to 
                        create and attend a wide range of unique experiences.
                        I built Ramble using a MERN stack, Stripe for payment
                        managament, Socket.IO for messaging and live updates, among other 
                        features.
                    </Caption>
                </GalleryCard>
                <GalleryCard>
                    <Img 
                    fixed={data.ohba.childImageSharp.fixed}
                    alt="COMP202 - OHBA"
                    className="project-image"/>
                    <Caption>
                        After a semester of being a "virtual" TA for
                        <a 
                        href="https://www.mcgill.ca/study/2020-2021/courses/comp-202"
                        target="_blank" 
                        rel="noopener noreferrer"> COMP202 </a>at McGill University, I 
                        created
                        <a 
                        href="https://office-hours-202.herokuapp.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"> this platform </a> for having 
                        office hours by appointment, in order to ensure students 
                        could get help from the instructors without waiting for hours 
                        in Zoom waiting rooms.
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

        ohba: file(relativePath: { eq: "images/OHBA.png" }) {
            childImageSharp {
                fixed( width: 300 ) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default ProjectsPage;