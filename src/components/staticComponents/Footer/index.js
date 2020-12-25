import React from 'react';

import SocialMedia from '../../common/SocialMedia';
import { Section, Container, Copy, StyledCopyLogo, CopyCompany } from './styles';

const Footer = () => {
    return (
        <Section>
            <Container>
                <SocialMedia footer />
                <Copy>
                    <StyledCopyLogo className="copyright" />
                    <CopyCompany>Smart Oak System 2020</CopyCompany>
                </Copy>
            </Container>
        </Section>
    );
};

export default Footer;
