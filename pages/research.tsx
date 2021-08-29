import styled from 'styled-components';

import { BREAKPOINTS } from 'global-constants';

import Image from 'next/image';
import PageHead from 'components/PageHead';
import Link from 'components/Link';
import fieldsImg from 'public/images/fields.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 80%;
    margin: 0 auto;

    @media(max-width: ${BREAKPOINTS.md}) {
        width: 90%;
    }
`;

const Text = styled.p`
    text-align: center;
    font-size: 1.1rem;

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 0.95rem;
    }
`;

const FIELDS_LINK = 'http://www.fields.utoronto.ca/activities/19-20/2019-fusrp';
const PRAKASH_LINK = 'https://www.cs.mcgill.ca/~prakash/';

const ResearchPage = () => (
    <Container>
        <PageHead
        title="Research"
        description="Participant of FUSRP 2019 and research assistant of Prakash Panangaden during summer 2020." />
        <Image
        src={fieldsImg}
        alt="Fields Institute 2019"
        placeholder="blur"
        width={600}
        height={150}
        objectFit="contain" />
        <Text>
            I was part of the{' '}
            <Link href={FIELDS_LINK} target="_blank" rel="noopener noreferrer">Fields 
            Undergraduate Summer Research Program</Link> in 2019. Supervised by 
            David Kreindler, I looked into similarity measures to analyze 
            mood symptom time-series data. 
        </Text>
        <Text>
            During the summer of 2020 I worked with{' '}
            <Link href={PRAKASH_LINK} target="_blank" rel="noopener noreferrer"> 
            Prakash Panangaden</Link> and explored bisimulation metrics for 
            reinforcement learning. 
        </Text>
    </Container>
);

export default ResearchPage;