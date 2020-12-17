import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    width: 100%;
    margin: auto;
    height: 10vh;
    position: fixed;
    right: 0; 
    left: 0;
    box-sizing: border-box;
    background-color: #E6E6FA;
    z-index: 5;
`

const FixedBar = ({className, children}) => 
    <Bar className={className}>
        {children}
    </Bar>

export default FixedBar;