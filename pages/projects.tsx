import styled from 'styled-components';

import Link from 'components/Link';
import ProjectCard from 'components/ProjectCard';
import rambleImg from 'public/images/ramble.png';
import borelImg from 'public/images/borel.png';
import ohbaImg from 'public/images/OHBA.png';
import hilbertImg from 'public/images/hilbert.png';
import pwaSimulatorImg from 'public/images/pwa-simulator.png';

const Container = styled.main`
    width: 90%;
    margin: 0 auto;
`;

const Description = styled.p`
    text-align: center;
    font-size: 1rem;
    font-style: italic;
    margin: 0 auto;
    width: fit-content;
    max-width: 950px;

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 0.9rem;
    }
`;

const GalleryTitle = styled.h3`
    width: fit-content;
    font-size: 2rem;
    margin: 10px auto;
    color: ${props => props.theme.colors.purple};

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 1.4rem;
    }
`;

const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
`;

const ProjectsPage = () => (
    <Container>
        <GalleryTitle>Web Dev</GalleryTitle>
        <Description>
            I&apos;ve created various full-stack applications: From an office hour{' '}
            booking tool for computer science students to a marketplace that{' '}
            features amazing experiences in Montréal. My favourite tech stack{' '}
            for these projects includes React, Node JS and MongoDB.
        </Description>
        <Gallery>
            <ProjectCard image={rambleImg}>
                <Link
                href="https://www.experienceramble.com/" 
                target="_blank" 
                rel="noopener noreferrer">Ramble</Link> allows anyone to 
                create and attend a wide range of unique experiences.
                I coded every single line of code in Ramble, using Typescript, 
                Next JS, a MongoDB database and an Apollo GraphQL server.
            </ProjectCard>
            <ProjectCard image={borelImg}>
                <Link
                href="https://borel.herokuapp.com/" 
                target="_blank" 
                rel="noopener noreferrer">Borel</Link> is a small application 
                for university note-takers.
                Although it is still in its early stages, I want Borel to 
                become a lecture notes marketplace.
            </ProjectCard>
            <ProjectCard image={ohbaImg}>
                After a semester of being a &quot;virtual&quot; TA during the COVID-19 
                pandemic, I created{' '}
                <Link 
                href="https://office-hours-202.herokuapp.com/" 
                target="_blank" 
                rel="noopener noreferrer">this platform</Link> for having 
                office hours by appointment, so students could get help without 
                waiting for hours in Zoom waiting rooms.
            </ProjectCard>
            <ProjectCard image={pwaSimulatorImg}>
                During my internship at Microsoft on summer 2021, I implemented a{' '}
                <Link 
                href="https://www.npmjs.com/package/@pwabuilder/manifest-previewer"
                target="_blank" 
                rel="noopener noreferrer">manifest previewer</Link> to help web developers
                visualize this json file, and also delivered a{' '}
                <Link
                href="https://www.npmjs.com/package/@pwabuilder/pwa-simulator"
                target="_blank" 
                rel="noopener noreferrer">PWA simulator</Link> featuring Windows 11.
            </ProjectCard>
        </Gallery>
        <GalleryTitle>Game Dev</GalleryTitle>
        <Description>
            I&apos;m an amateur game developer. In fact, what initially captivated me of{' '}
            computer science was how much it felt like a videogame (&quot;bugs vs{' '}
            coders&quot;). If you want to play my games visit my{' '}
            <Link
            href="https://mariasolos.itch.io/" 
            target="_blank" 
            rel="noopener noreferrer">itch.io page</Link>!
        </Description>
        <Gallery>
            <ProjectCard image={hilbertImg}>
                My first game was{' '}
                <Link
                href="https://mariasolos.itch.io/hilbert-space" 
                target="_blank" 
                rel="noopener noreferrer">Hilbert Space</Link>, a real analysis
                pun that went too far. Do you know the difference between &forall; and &exist;?
            </ProjectCard>
        </Gallery>
    </Container>
);

export default ProjectsPage;