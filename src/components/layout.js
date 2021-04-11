import React from 'react';
import styled from 'styled-components';
import 'normalize.css';

import SEO from './SEO';
import Footer from './footer';
import Header from './header';

const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    font-family: 'Courier', sans-serif;
`

const Layout = ({ children }) => 
    <Container>
        <SEO />
        <Header />
        {children}
        <Footer />
    </Container>;

export default Layout;