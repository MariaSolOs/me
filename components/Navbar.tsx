import styled from 'styled-components';

import NextLink from 'next/link';
import Link from 'components/Link';

const Bar = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    margin-right: 2rem;
    font-size: 1.1rem;

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 0.95rem;
        margin-right: 10px;
    }
`;

const Brand = styled(NavLink)`
    font-family: 'Lobster', cursive;
    font-size: 2rem;
    margin: 0 auto 0 2rem;

    @media(max-width: ${props => props.theme.breakpoints.md}) {
        font-size: 1.4rem;
        margin-left: 0;
    }
`;

const Navbar = () => {
    return (
        <Bar>
            <NextLink href={{ pathname: '/' }} passHref legacyBehavior>
                <Brand>M.S.</Brand>
            </NextLink>
            <NextLink href={{ pathname: '/projects' }} passHref legacyBehavior>
                <NavLink>Projects</NavLink>
            </NextLink>
            <NextLink href={{ pathname: '/research' }} passHref legacyBehavior>
                <NavLink>Research</NavLink>
            </NextLink>
            <NextLink href={{ pathname: '/about' }} passHref legacyBehavior>
                <NavLink>About me</NavLink>
            </NextLink>
        </Bar>
    );
}

export default Navbar;