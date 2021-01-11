import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';

import { Title, Paragraph, Section, Wrapper, WrapperWithParagraph } from './styles.js';

const Description = () => {
    const intl = useIntl();

    return (
        <Section>
            <WrapperWithParagraph>
                <Title>
                    {intl.formatMessage({
                        id: `aboutUs.title`,
                    })}
                </Title>
                <Paragraph>
                    {intl.formatMessage({
                        id: `aboutUs.content1`,
                    })}
                </Paragraph>
            </WrapperWithParagraph>
            <Wrapper>
                <Paragraph>
                    {intl.formatMessage({
                        id: `aboutUs.content2`,
                    })}
                </Paragraph>
            </Wrapper>
        </Section>
    );
};

export default Description;
