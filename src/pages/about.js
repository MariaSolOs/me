import React from 'react';
import styled from 'styled-components';

import cv from '../../static/CV.pdf';
import Layout from '../components/layout';

const Text = styled.div`
    padding: 200px 0;
    margin: auto;
    width: 70%;
    font-size: 1.7rem;
    text-align: center;

    @media(max-width: 768px) {
        font-size: 1.3rem;
    }

    a {
        color: #E0115F;
        text-decoration: none;
    }
`

const AboutPage = () => {
    return (
        <Layout>
            <Text>
                I am an undergradute student of mathematics and computer science at McGill 
                University, as well as a teaching assistant for COMP202 (Foundations of 
                Programming). I am always in the search for new challenges and learning new 
                things. Oh, and I have a cat, her name is Ophelia. <br/><br/>
                Here is my <a href={cv} target="_blank" rel="noopener noreferrer">
                CV</a>.
            </Text>
        </Layout>
    );
}

export default AboutPage;