import { useRouter } from 'next/router';
import styled from 'styled-components';
import type { FC, HTMLAttributes } from 'react';

const Background = styled.div<StyleProps>`
    background: linear-gradient(to right, #F2E9E4 50%, #9A8C98 50%);
    position: absolute;
    inset: 0;
    transition: all 500ms ease-in-out;
    background-size: ${props => props.splitBackground ? '100' : '200'}%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
`;

type StyleProps = {
    splitBackground: boolean;
}

const SiteBackground: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const router = useRouter();

    return (
        <Background splitBackground={router.asPath === '/'} className={props.className}>
            {props.children}
        </Background>
    );
}

export default SiteBackground;