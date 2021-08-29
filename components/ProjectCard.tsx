import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS } from 'global-constants';

import Image from 'next/image';

const Card = styled.div`
    border-radius: 10px;
    overflow: hidden;
    background-color: #FFF;
    height: 350px;
    width: 450px;
    margin: 0 30px;
    flex-shrink: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 
                0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    font-size: 0.95rem;

    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
                    0 10px 10px rgba(0, 0, 0, 0.22);
    }

    @media(max-width: ${BREAKPOINTS.md}) {
        width: 90vw;
        max-width: 450px;
        margin: 0 5vw;
    }
`;

const CardImage = styled.div`
    position: relative;
    height: 60%;

    @media(max-width: ${BREAKPOINTS.sm}) {
        height: 50%;
    }
`;

const CardBody = styled.p`
    margin: 10px;

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 0.9rem;
        margin: 5px;
    }
`;

type Props = {
    image: StaticImageData;
}

const ProjectCard: React.FC<Props> = (props) => (
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