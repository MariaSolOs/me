import styled from 'styled-components';

import Head from 'components/Head';
import Link from 'components/Link';
import ProjectCard from 'components/ProjectCard';
import rambleImg from 'public/images/ramble.png';
import paradeigmaImg from 'public/images/paradeigma.png';
import ohbaImg from 'public/images/OHBA.png';
import pwaSimulatorImg from 'public/images/pwa-simulator.png';
import hilbertImg from 'public/images/hilbert.png';
import ratonImg from 'public/images/raton-cat.png';
import vsLintingImg from 'public/images/vs-linting.png';
import addMultifileImg from 'public/images/add-multifile.png';

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
        <Head />
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
            <ProjectCard image={paradeigmaImg}>
                Tired of copy-pasting code from Stack Overflow? Try{' '}
                <Link
                href="https://paradeigma-web-app.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer">Paradeigma</Link>, and easily find{' '}
                the code examples you need (and even generate snippets to use in your IDE!).
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
            <ProjectCard image={ratonImg}>
                As my first artsy attempt, the assets in{' '}
                <Link 
                href="https://mariasolos.itch.io/ratn"
                target="_blank" 
                rel="noopener noreferrer">Ratón</Link> are all my own. Still a WIP, but
                a cute, classic game nonetheless (gotta love those <i>Tom and Jerry</i> vibes).
            </ProjectCard>
        </Gallery>
        <GalleryTitle>Editor Tooling</GalleryTitle>
        <Description>
            As a developer, I like to create tools that I would like to have myself.{' '}
            When I&apos;m not figuring out the dark mysteries of Visual Studio extensibility,
            I sometimes give my 2¢ to VS Code extensions.
        </Description>
        <Gallery>
            <ProjectCard image={vsLintingImg}>
                As my first large project at Microsoft,{' '}
                <Link
                href="https://devblogs.microsoft.com/visualstudio/building-a-new-javascript-linting-experience-in-visual-studio/"
                target="_blank" 
                rel="noopener noreferrer">I rewrote the built-in linting extension</Link>, enabling ESLint{' '}
                support in HTML and Vue for the first time, as well as linting quick fixes and a flexible linter{' '}
                configuration.
            </ProjectCard>
            <ProjectCard image={addMultifileImg}>
                Simple yet practical,{' '}
                <Link
                href="https://marketplace.visualstudio.com/items?itemName=mariasolos.add-multifile"
                target="_blank" 
                rel="noopener noreferrer">Add Multi File</Link> was my first VS Code extension,{' '}
                which revamps the &quot;New File/Folder experience&quot; with custom multi-item templates.
            </ProjectCard>
        </Gallery>
    </Container>
);

export default ProjectsPage;