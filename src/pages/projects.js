import React from 'react';
import Img from 'gatsby-image';
import {graphql} from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';

const Gallery = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    align-items: center;
`

const GalleryCard = styled.div`
    width: 40%;
    margin: 0 5%;
    min-width: 150px;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Caption = styled.p`
    margin: 0;
    color: #000;
    font-size: 1.1rem;
    text-align: center;
`

const ProjectsPage = ({data}) => {
    return (
        <Layout>
            <Gallery>
                <GalleryCard>
                    <Img 
                    fixed={data.file.childImageSharp.fixed}
                    alt="Borel logo"/>
                    <Caption>
                        Borel is a small application for university note-takers.
                        Although it is still in its early stages, I want Borel to 
                        become a lecture notes marketplace.
                    </Caption>
                </GalleryCard>
            </Gallery>
        </Layout>
    );
}

//Images
export const query = graphql`
    query {
        file(relativePath: { eq: "images/borel.png" }) {
            childImageSharp {
                fixed( width: 350 ) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default ProjectsPage;