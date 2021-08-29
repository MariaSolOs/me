import styled from 'styled-components';

import routes from 'routes';
import { BREAKPOINTS } from 'global-constants';

import NextLink from 'next/link';
import Link from 'components/Link';

const Container = styled.div`
    width: fit-content;
    max-width: 90vw;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Message = styled.h3`
    text-align: center;
    margin-top: 0;

    @media(max-width: ${BREAKPOINTS.sm}) {
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
            <NextLink { ...routes.home } passHref><Link>homepage</Link></NextLink>.
        </Message>
    </Container>
);

export default Page404;