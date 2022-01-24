import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';

const Bar = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    margin: auto auto 0;
`;

const Icon = styled(FontAwesomeIcon)`
    text-decoration: none;
    color: ${props => props.theme.colors.purple};
    font-size: 2.2rem;
    margin: 0 1rem;

    @media(max-width: ${props => props.theme.breakpoints.sm}) {
        font-size: 1.7rem;
    }
`;

const GITHUB_URL = 'https://github.com/MariaSolOs';
const LINKEDIN_URL = 'https://www.linkedin.com/in/mariasolano151822';
const EMAIL = 'majosolano99@gmail.com';

const Footer = () => (
    <Bar>
        <a href={GITHUB_URL} rel="noopener noreferrer" target="_blank">
            <Icon icon={faGithub} />
        </a>
        <a href={LINKEDIN_URL} rel="noopener noreferrer" target="_blank">
            <Icon icon={faLinkedin} />
        </a>
        <a href={`mailto:${EMAIL}`}>
            <Icon icon={faEnvelope} />
        </a>
    </Bar>
);

export default Footer;