import styled from 'styled-components';
import type { FCC } from 'react';
import type { StaticImageData } from 'next/image';

import Image from 'next/image';

const Card = styled.div`
    border-radius: 10px;
    overflow: hidden;
    background-color: #FFF;
    height: 350px;
    width: 45%;
    max-width: 500px;
    margin: 20px 2.5% 0;
    flex-shrink: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 
                0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    font-size: 0.95rem;

    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                    0 10px 10px rgba(0, 0, 0, 0.22);
    }

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        width: 90%;
        max-width: 400px;
        margin: 20px 5% 0;
    }
`;

const CardImage = styled.div`
    position: relative;
    height: 60%;

    @media(max-width: ${props => props.theme.breakpoints.sm}) {
        height: 50%;
    }
`;

const CardBody = styled.p`
    margin: 10px;

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 0.9rem;
        margin: 5px;
    }
`;

type Props = {
    image: StaticImageData;
}

const ProjectCard: FCC<Props> = (props) => (
    <Card>
        <CardImage>
            <Image
            src={props.image}
            alt="Project"
            layout="fill"
            placeholder="blur"
            objectFit="cover" />
        </CardImage>
        <CardBody>{props.children}</CardBody>
    </Card>
);

export default ProjectCard;