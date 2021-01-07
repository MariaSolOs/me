import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    align-items: center;
    overflow-x: scroll;

    @media(max-width: 768px) {
        flex-direction: column;
        overflow-y: scroll;
        height: 80vh;
    }
`

const Gallery = ({ children }) => 
    <Wrapper>
        {children}
    </Wrapper>

export default Gallery;