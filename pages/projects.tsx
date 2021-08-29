import styled from 'styled-components';

import PageHead from 'components/PageHead';
import Link from 'components/Link';
import ProjectCard from 'components/ProjectCard';
import rambleImg from 'public/images/ramble.png';
import borelImg from 'public/images/borel.png';
import ohbaImg from 'public/images/OHBA.png';
import hilbertImg from 'public/images/hilbert.png';
import pwaSimulatorImg from 'public/images/pwa-simulator.png';

const Gallery = styled.div`
    display: flex;
    overflow-x: scroll;
    height: 100%;
    align-items: center;
    margin: 0 auto;
`;

const ProjectsPage = () => (
    <Gallery>
        <PageHead 
        title="Projects"
        description="I've coded every single line of code in Ramble, built a booking platform for helping students during the COVID pandemic, and even had a mathematical adventure with web dev." />
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
        <ProjectCard image={hilbertImg}>
            I&apos;m an amateur game developer. My first game was{' '}
            <Link
            href="https://sharemygame.com/@MariaSolOs/hilbert-space?fbclid=IwAR2Gef9ftxYe6PrWNHtGzr1gYAlrcx66-7OOcRjSZYSDp0nDn_EXZoM26K0" 
            target="_blank" 
            rel="noopener noreferrer">Hilbert Space</Link>, a real analysis
            pun that went too far.
        </ProjectCard>
        <ProjectCard image={pwaSimulatorImg}>
            During my internship at Microsoft on summer 2021, I implemented a{' '}
            <Link 
            href="https://www.npmjs.com/package/@pwabuilder/pwa-simulator"
            target="_blank" 
            rel="noopener noreferrer">manifest previewer</Link> to help web developers
            visualize this json file, and also delivered a{' '}
            <Link
            href="https://www.npmjs.com/package/@pwabuilder/pwa-simulator"
            target="_blank" 
            rel="noopener noreferrer">PWA simulator</Link> featuring Windows 11.
        </ProjectCard>
    </Gallery>
);

export default ProjectsPage;