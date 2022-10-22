import styled from 'styled-components';

import NextLink from 'next/link';
import Link from 'components/Link';

const Container = styled.main`
    width: fit-content;
    max-width: 90vw;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

const Message = styled.h3`
    text-align: center;
    margin-top: 0;

    @media(max-width: ${props => props.theme.breakpoints.sm}) {
        font-size: 1rem;
    }
`;

const Page404 = () => (
    <Container>
        <Message>
            Are you lost or just messing around? Anyway, you shouldn&apos;t be here.
        </Message>
        <Message>
            Go to the{' '}
            <NextLink href={{ pathname: '/' }} passHref><Link>homepage</Link></NextLink>.
        </Message>
    </Container>
);

export default Page404;