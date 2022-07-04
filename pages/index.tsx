import styled from 'styled-components';

const Container = styled.main`
    padding: 0 50px;
    box-sizing: border-box;
    margin: auto;

    @media(max-width: ${props => props.theme.breakpoints.sm}) {
        padding: 0 30px;
    }
`;

const Title = styled.h1`
    font-family: 'Lobster', cursive;
    font-size: 3.5rem;
    margin: 0;

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 3rem;
    }

    @media(max-width: ${props => props.theme.breakpoints.sm}) {
        font-size: 2.5rem;
    }
`;

const Subtitle = styled.h2`
    @media(max-width: ${props => props.theme.breakpoints.sm}) {
        font-size: 1.2rem;
    }
`;

const HomePage = () => (
    <Container>
        <div>
            <Title>Hi, I&apos;m Maria.</Title>
            <Subtitle>
                SWE at Microsoft, open source enthusiast, McGill alumni,
                <br />and nerd without shame.
            </Subtitle>
        </div>
    </Container>
);

export default HomePage;