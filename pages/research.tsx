import styled from 'styled-components';

import Image from 'next/image';
import Link from 'components/Link';
import fieldsImg from 'public/images/fields.jpg';

const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        width: 90%;
    }
`;

const Text = styled.p`
    text-align: center;
    font-size: 1.1rem;

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 0.95rem;
    }
`;

const ResearchPage = () => (
    <Container>
        <Image
        src={fieldsImg}
        alt="Fields Institute 2019"
        placeholder="blur"
        width={600}
        height={150}
        objectFit="contain" />
        <Text>
            I was part of the{' '}
            <Link href="http://www.fields.utoronto.ca/activities/19-20/2019-fusrp" target="_blank" rel="noopener noreferrer">
            Fields Undergraduate Summer Research Program</Link> in 2019. Supervised by David 
            Kreindler, I looked into similarity measures to analyze mood symptom time-series 
            data.<br />
            Our results were published in the <Link href="https://www.sciencedirect.com/science/article/pii/S0165032722004554?dgcid=coauthor"
            target="_blank" rel="noopener noreferrer">Journal of Affective Disorders</Link>.
        </Text>
        <Text>
            During the summer of 2020 I worked with{' '}
            <Link href="https://www.cs.mcgill.ca/~prakash/" target="_blank" rel="noopener noreferrer"> 
            Prakash Panangaden</Link> and explored bisimulation metrics for reinforcement learning. 
        </Text>
    </Container>
);

export default ResearchPage;