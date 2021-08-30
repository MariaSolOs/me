import styled from 'styled-components';

import { BREAKPOINTS } from 'global-constants';

import PageHead from 'components/PageHead';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 50px;
    box-sizing: border-box;

    @media(max-width: ${BREAKPOINTS.sm}) {
        padding: 0 30px;
    }
`;

const Title = styled.h1`
    font-family: 'Lobster', cursive;
    font-size: 3.5rem;
    margin: 0;

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 3rem;
    }

    @media(max-width: ${BREAKPOINTS.sm}) {
        font-size: 2.5rem;
    }
`;

const Subtitle = styled.h2`
    @media(max-width: ${BREAKPOINTS.sm}) {
        font-size: 1.2rem;
    }
`;

const HomePage = () => (
    <Container>
        <PageHead description="Undergrad at McGill, incoming SWE at Microsoft, and nerd without shame." />
        <div>
            <Title>Hi, I&apos;m Maria José.</Title>
            <Subtitle>
                Undergrad at McGill, incoming SWE at Microsoft, 
                and nerd without shame.
            </Subtitle>
        </div>
    </Container>
);


export default HomePage
