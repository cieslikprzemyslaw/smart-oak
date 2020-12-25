import React from 'react';
import Section from './Section';

import firstImage from '../../../../assets/images/third-animation-first-section.png';
import secondImage from '../../../../assets/images/third-animation-second-section.png';
import thirdImage from '../../../../assets/images/third-animation-third-section.png';
import { useIntl } from 'gatsby-plugin-intl';
import {
    FirstSection,
    Title1,
    Title2,
    InfoSectionContainer,
    InfoSectionHeader,
    InfoSectionContent,
    InfoSection,
    Wrapper,
} from './styles';

/** [ "SECTION_NAME", SECTION_IMAGE, ["SECTION_POINT", ...] ] */
const contentSection = [
    ['secondSection', secondImage, ['firstPoint', 'secondPoint', 'thirdPoint']],
    ['thirdSection', thirdImage, ['firstPoint', 'secondPoint', 'thirdPoint']],
];

const ThirdAnimation = () => {
    const intl = useIntl();

    const firstPartTitile = intl.formatMessage({
        id: `thirdAnimation.firstSection.headerFirstPart`,
    });
    const secondPartTitle = intl.formatMessage({
        id: `thirdAnimation.firstSection.headerSecondPart`,
    });

    const formatMessage = (section, point, isHeader) =>
        intl.formatMessage({
            id: `thirdAnimation.${section}.${point}.${isHeader ? 'header' : 'content'}`,
        });

    return (
        <Wrapper>
            <Section imageOnLeft src={firstImage} shiftValue={100}>
                <FirstSection>
                    <Title1>{firstPartTitile}</Title1>
                    <Title2>{secondPartTitle}</Title2>
                </FirstSection>
            </Section>

            {contentSection.map((section, index) => (
                <Section
                    key={section}
                    src={section[1]}
                    imageOnLeft={!!index % 2}
                    shiftValue={!!index % 2 ? 100 : -100}
                >
                    <InfoSection>
                        {section[2].map((point) => (
                            <InfoSectionContainer key={point}>
                                <InfoSectionHeader>
                                    {formatMessage(section[0], point, true)}
                                </InfoSectionHeader>
                                <InfoSectionContent>
                                    {formatMessage(section[0], point, false)}
                                </InfoSectionContent>
                            </InfoSectionContainer>
                        ))}
                    </InfoSection>
                </Section>
            ))}
        </Wrapper>
    );
};

export default ThirdAnimation;
