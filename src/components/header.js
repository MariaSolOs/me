import React from 'react';
import styled from 'styled-components';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import FixedBar from './fixedBar';

const Bar = styled(FixedBar)`
    top: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1rem 10% 1rem 5%;

    @media(max-width: 768px) {
        padding: 1rem 5vw;
    }
`

const NavBar = styled.ul`
    margin: 0;
    padding: 0;
`

const NavLink = styled(AniLink)`
    text-decoration: none;
    margin: 0 0 0 2rem;
    color: #000;
    font-weight: 700;
    font-size: 1.2rem;

    @media(max-width: 768px) {
        font-size: 0.9rem;
        margin-left: 10px;
    }

    &.header-name {
        margin: 0;
        font-size: 2rem;
        color: #8B008B;
        text-transform: uppercase;

        @media(max-width: 768px) {
            span { display: none; }
        }
    }
`

const TRANSITION_COLOR = '#F5F5F5';

const pages = [
    {title: 'Projects', link: '/projects/'},
    {title: 'Research', link: '/research/'},
    {title: 'About me', link: '/about/'}
];

const Header = () => {
    return (
        <Bar>
            <NavLink 
            to="/" 
            className="header-name" 
            paintDrip
            hex="#FFF">
                M<span>aria</span> S<span>olano</span>.
            </NavLink>
            <NavBar>
                {pages.map(({ title, link }, i) => 
                    <NavLink 
                    key={i}
                    to={link} 
                    cover 
                    bg={TRANSITION_COLOR}>
                        {title}
                    </NavLink>
                )}
            </NavBar>
        </Bar> 
    );
}

export default Header;