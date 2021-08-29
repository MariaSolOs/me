import styled from 'styled-components';

import { BREAKPOINTS } from 'global-constants';

import PageHead from 'components/PageHead';
import Link from 'components/Link';
import cv from 'public/CV.pdf';

const Container = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;

const Text = styled.p`
    text-align: center;
    font-size: 1.3rem;
    margin-top: 0;

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 1rem;
    }
`;

const MCGILL_URL = 'https://www.mcgill.ca/';
const RAMBLE_URL = 'https://www.experienceramble.com/';

const AboutPage = () => (
    <Container>
        <PageHead
        title="About me"
        description="I am an undergradute student of mathematics and computer science at McGill University, a teaching assistant, co-founder of Ramble, and a huge nerd." />
        <Text>
            I am an undergradute student of mathematics and computer science at{' '}
            <Link href={MCGILL_URL} target="_blank" rel="noopener noreferrer">
            McGill University</Link>, a teaching assistant, co-founder of{' '}
            <Link href={RAMBLE_URL} target="_blank" rel="noopener noreferrer">Ramble</Link>, 
            and a huge nerd. As long as I&apos;m coding, I&apos;ll be 
            happy (from the scary pointer nightmares in C to setting up a fancy 
            CSS animation). 
        </Text>
        <Text>
            Oh, and I have a cat, her name is Ophelia. 
        </Text>
        <Text>
            Here is my <Link href={cv} target="_blank" rel="noopener noreferrer">CV</Link>.
        </Text>
    </Container>
);

export default AboutPage;