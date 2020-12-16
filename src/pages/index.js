import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const Title = styled.div`
    width: 100%;
    height: 100vh;
    padding: 200px 20% 0;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 0;
    box-sizing: border-box;
    font-size: 3.5rem;
    font-family: 'Fugaz One', cursive;
    background: linear-gradient(to right, #E0115F 50%, #FFF 50%);

    @media(max-width: 768px) {
        font-size: 2.5rem;
    }
`

const Subtitle = styled.h4`
    font-size: 2.5rem;

    @media(max-width: 768px) {
        font-size: 1.8rem;
    }
`

const IndexPage = () => {
    return (
        <Layout>
            <Title>
                Hi, I'm Maria.<br/>
                <Subtitle>
                    Undergrad at McGill, incoming SWE intern at Microsoft, 
                    and nerd without shame.
                </Subtitle>
            </Title>
        </Layout>
    );
}

export default IndexPage;
