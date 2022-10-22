import styled from 'styled-components';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
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

const links: { href: string; icon: FontAwesomeIconProps['icon']; }[] = [
    { href: 'https://twitter.com/MariaSolanoOs', icon: faTwitter },
    { href: 'https://github.com/MariaSolOs', icon: faGithub },
    { href: 'https://www.linkedin.com/in/mariasolano151822', icon: faLinkedin },
    { href: 'mailto:majosolano99@gmail.com', icon: faEnvelope }
];

const Footer = () => (
    <Bar>
        {links.map((link, i) =>
            <a key={i} href={link.href} rel="noopener noreferrer" target="_blank">
                <Icon icon={link.icon} />
            </a>
        )}
    </Bar>
);

export default Footer;