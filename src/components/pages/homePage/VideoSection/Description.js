import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { Section, DescriptionContainer, DescriptionTitle, Description } from './styles';

const DescriptionSection = ({ forwardRef }) => {
    const intl = useIntl();
    return (
        <Section>
            <DescriptionContainer ref={forwardRef}>
                <DescriptionTitle>
                    {intl.formatMessage({
                        id: `videoSection.downloadPlatform`,
                    })}
                </DescriptionTitle>
                <Description>
                    {intl.formatMessage({
                        id: `videoSection.joinEnvironment`,
                    })}
                </Description>
            </DescriptionContainer>
        </Section>
    );
};
export default DescriptionSection;
