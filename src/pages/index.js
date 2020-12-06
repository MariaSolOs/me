import React from 'react';
import styled from 'styled-components';

import Typing from 'react-typing-animation';
import Layout from '../components/layout';

const Title = styled.div`
    width: 80%;
    min-width: 300px;
    margin: auto;
    padding-top: 20vh;
    font-size: 3.5rem;
    height: 70vh;
`

const IndexPage = () => {
    return (
        <Layout>
            <Typing speed={100}>
                <Title>
                    I'm Maria.
                    I love coding, math, intellectual challenges,  
                    <Typing.Delay ms={1000}/> and wine.
                </Title>
            </Typing>
        </Layout>
    );
}

export default IndexPage;
