import { forwardRef } from 'react';
import type { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
    color: ${props => props.theme.colors.purple};
    font-weight: bold;
`;

type Props = {
    className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link = forwardRef<HTMLAnchorElement, Props>(function Link(props, ref) {
    return (
        <Anchor ref={ref} { ...props }>{props.children}</Anchor>
    );
});

export default Link;