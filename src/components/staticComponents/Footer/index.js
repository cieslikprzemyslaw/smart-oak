import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import SocialMedia from '../../common/SocialMedia';
import {Section, Container , Copy, StyledCopyLogo, CopyCompany} from './styles'

const Footer = () => {
    const intl = useIntl();

    return (
        <Section>
            <Container>
                <SocialMedia footer />
                <Copy>
                    <StyledCopyLogo className="copyright" />
                    <CopyCompany>2020 Smart Oak Project. {intl.formatMessage({id: `general.rights`})}</CopyCompany>
                </Copy>
            </Container>
        </Section>
    );
};

export default Footer;
