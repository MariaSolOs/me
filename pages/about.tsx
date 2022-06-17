import styled from 'styled-components';

import Link from 'components/Link';
import cv from 'public/CV.pdf';

const Container = styled.main`
    width: 80%;
    margin: auto;
`;

const Text = styled.p`
    text-align: center;
    font-size: 1.3rem;
    margin-top: 0;

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 1rem;
    }
`;

const AboutPage = () => (
    <Container>
        <Text>
            I&apos;m a software engineer at Microsoft (JavaScript tooling and{' '}
            <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
            TypeScript</Link> team). In 2021 I completed my undergraduate degree{' '}
            in mathematics and computer science at{' '}
            <Link href="https://www.mcgill.ca/" target="_blank" rel="noopener noreferrer">
            McGill University</Link>, where I didn&apos;t only learn about booleans and
            integrals but also flexed my debugging skills as a teaching assistant. 
        </Text>
        <Text>
            I&apos;m a huge nerd; as long as I&apos;m coding, I&apos;ll be 
            happy (from the scary pointer nightmares in C to setting up a fancy 
            CSS animation).<br />
            Oh, and I have a cat, her name is Ophelia. 
        </Text>
        <Text>
            Here is my <Link href={cv} target="_blank" rel="noopener noreferrer">CV</Link>.
        </Text>
    </Container>
);

export default AboutPage;