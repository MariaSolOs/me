import React from 'react';
import styled from 'styled-components';

import FixedBar from './fixedBar';
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

const CONTACT_INFO = {
    EMAIL: 'majosolano99@gmail.com',
    LINKEDIN: 'https://www.linkedin.com/in/maria-solano-24a983162',
    GITHUB: 'https://github.com/MariaSolOs'
}

const Bar = styled(FixedBar)`
    text-align: center;
    padding: 1rem 10%;
    bottom: 0;

    .footer-icon {
        font-size: 2rem;
        color: #000;
        margin: 0 10px;
    }
`

const Footer = () => 
    <Bar>
        <a href={CONTACT_INFO.GITHUB}>
            <FaGithub className="footer-icon"/>
        </a>
        <a href={CONTACT_INFO.LINKEDIN}>
            <FaLinkedinIn className="footer-icon"/>
        </a>
        <a href={`mailto:${CONTACT_INFO.EMAIL}`}>
            <FaRegEnvelope className="footer-icon"/>
        </a>
    </Bar>

export default Footer;