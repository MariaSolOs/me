import React from 'react';
import styled from 'styled-components';

import {Link} from 'gatsby';
import {FaGithub, FaLinkedinIn, FaRegEnvelope} from 'react-icons/fa';

const Container = styled.div`
    min-width: 100%;
    min-height: 100%;
    margin: 0;
    background-color: #F6F6F6;
    font-family: 'Roboto Slab', serif;
`

const FixedBar = styled.div`
    width: 100%;
    box-sizing: border-box;
    background-color: #E6E2F0;
`

const Header = styled(FixedBar)`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1rem 10% 1rem 5%;
`

const NavBar = styled.ul`
    margin: 0;
    padding: 0;
`

const NavLink = styled(Link)`
    text-decoration: none;
    margin: 0 0 0 2rem;
    color: #524670;
    font-weight: 700;
    font-size: 1.2rem;

    &.header-name {
        margin: 0;
        font-size: 2rem;
    }
`

const Footer = styled(FixedBar)`
    text-align: center;
    padding: 1rem 10%;

    .footer-icon {
        font-size: 2rem;
        color: #524670;
        margin: 0 10px;
    }
`

const CONTACT_INFO = {
    EMAIL: 'majosolano99@gmail.com',
    LINKEDIN: 'https://www.linkedin.com/in/maria-solano-24a983162',
    GITHUB: 'https://github.com/MariaSolOs'
}

const Layout = ({children}) => {
    return (
        <Container>
            <Header>
                <NavLink to="/" className="header-name">Maria Solano.</NavLink>
                <NavBar>
                    <NavLink to="/projects/">Projects</NavLink>
                    <NavLink to="/research/">Research</NavLink>
                </NavBar>
            </Header>
            {children}
            <Footer>
                <a href={CONTACT_INFO.GITHUB}>
                    <FaGithub className="footer-icon"/>
                </a>
                <a href={CONTACT_INFO.LINKEDIN}>
                    <FaLinkedinIn className="footer-icon"/>
                </a>
                <a href={`mailto:${CONTACT_INFO.EMAIL}`}>
                    <FaRegEnvelope className="footer-icon"/>
                </a>
            </Footer>
        </Container>
    );
}

export default Layout;