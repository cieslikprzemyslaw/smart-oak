import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import {
    Section,
    DescriptionContainer,
    DescriptionTitle,
    Description,
    DescriptionMainTitle,
    DescriptionMainSubtitle,
} from './styles';

const DescriptionSection = ({ forwardRef }) => {
    const intl = useIntl();

    return (
        <Section>
            <DescriptionContainer ref={forwardRef}>
                <DescriptionMainTitle>
                    {intl.formatMessage({
                        id: `videoSection.conquerTheWorld`,
                    })}
                </DescriptionMainTitle>
                <DescriptionMainSubtitle>
                    {intl.formatMessage({
                        id: `videoSection.projects`,
                    })}
                </DescriptionMainSubtitle>
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
