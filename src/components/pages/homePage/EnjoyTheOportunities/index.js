import React from 'react';
import Section from './Section';
import Description from './Description';

import firstImage from '../../../../assets/images/third-animation-first-section.png';
import secondImage from '../../../../assets/images/third-animation-second-section.png';
import thirdImage from '../../../../assets/images/third-animation-third-section.png';
import { useIntl } from 'gatsby-plugin-intl';
import { FirstSection, Title1, Title2 } from './styles';

const ThirdAnimation = () => {
    const intl = useIntl();
    const firstPartTitile = intl.formatMessage({
        id: `thirdAnimation.firstSection.headerFirstPart`,
    });
    const secondPartTitle = intl.formatMessage({
        id: `thirdAnimation.firstSection.headerSecondPart`,
    });
    const headersSecondSection = [
        intl.formatMessage({
            id: `thirdAnimation.secondSection.firstPoint.header`,
        }),
        intl.formatMessage({
            id: `thirdAnimation.secondSection.secondPoint.header`,
        }),
        intl.formatMessage({
            id: `thirdAnimation.secondSection.thirdPoint.header`,
        }),
    ];
    const headersThirdSection = [
        intl.formatMessage({
            id: `thirdAnimation.thirdSection.firstPoint.header`,
        }),
        intl.formatMessage({
            id: `thirdAnimation.thirdSection.secondPoint.header`,
        }),
        intl.formatMessage({
            id: `thirdAnimation.thirdSection.thirdPoint.header`,
        }),
    ];

    const contentSecondSection = [
        intl.formatMessage({
            id: `thirdAnimation.secondSection.firstPoint.content`,
        }),
        intl.formatMessage({
            id: `thirdAnimation.secondSection.secondPoint.content`,
        }),
        intl.formatMessage({
            id: `thirdAnimation.secondSection.thirdPoint.content`,
        }),
    ];
    const contentThirdSection = [
        intl.formatMessage({
            id: `thirdAnimation.thirdSection.firstPoint.content`,
        }),
        intl.formatMessage({
            id: `thirdAnimation.thirdSection.secondPoint.content`,
        }),
        intl.formatMessage({
            id: `thirdAnimation.thirdSection.thirdPoint.content`,
        }),
    ];

    return (
        <>
            <Section imageOnLeft shiftValue={-200} src={firstImage}>
                <FirstSection>
                    <Title1>{firstPartTitile}</Title1>
                    <br />
                    <Title2>{secondPartTitle}</Title2>
                </FirstSection>
            </Section>
            <Section shiftValue={-200} src={secondImage}>
                <Description headers={headersSecondSection} content={contentSecondSection} />
            </Section>
            <Section imageOnLeft shiftValue={200} src={thirdImage} maxWidth={'1396px'}>
                {' '}
                <Description headers={headersThirdSection} content={contentThirdSection} />
            </Section>
        </>
    );
};

export default ThirdAnimation;
