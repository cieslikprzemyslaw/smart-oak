import React from 'react';
import Section from './Section';

import firstImage from '../../../../assets/images/third-animation-first-section.png';
import secondImage from '../../../../assets/images/third-animation-second-section.png';
import thirdImage from '../../../../assets/images/third-animation-third-section.png';
import { useIntl } from 'gatsby-plugin-intl';
import {
    FirstSection,
    InfoSection,
    InfoSectionContainer,
    InfoSectionHeader,
    InfoSectionContent,
    Title1,
    Title2,
} from './styles';

const ThirdAnimation = () => {
    const intl = useIntl();

    return (
        <>
            <Section imageOnLeft type={'rightToLeft'} src={firstImage}>
                <FirstSection>
                    <Title1>
                        {intl.formatMessage({
                            id: `thirdAnimation.firstSection.headerFirstPart`,
                        })}
                    </Title1>
                    <br />
                    <Title2>
                        {intl.formatMessage({
                            id: `thirdAnimation.firstSection.headerSecondPart`,
                        })}
                    </Title2>
                </FirstSection>
            </Section>
            <Section type={'leftToRight'} src={secondImage}>
                <InfoSection>
                    <InfoSectionContainer>
                        <InfoSectionHeader>
                            {intl.formatMessage({
                                id: `thirdAnimation.secondSection.firstPoint.header`,
                            })}
                        </InfoSectionHeader>
                        <InfoSectionContent>
                            {intl.formatMessage({
                                id: `thirdAnimation.secondSection.firstPoint.content`,
                            })}
                        </InfoSectionContent>
                    </InfoSectionContainer>
                    <InfoSectionContainer>
                        <InfoSectionHeader>
                            {intl.formatMessage({
                                id: `thirdAnimation.secondSection.secondPoint.header`,
                            })}
                        </InfoSectionHeader>
                        <InfoSectionContent>
                            {intl.formatMessage({
                                id: `thirdAnimation.secondSection.secondPoint.content`,
                            })}
                        </InfoSectionContent>
                    </InfoSectionContainer>
                    <InfoSectionContainer>
                        <InfoSectionHeader>
                            {intl.formatMessage({
                                id: `thirdAnimation.secondSection.thirdPoint.header`,
                            })}
                        </InfoSectionHeader>
                        <InfoSectionContent>
                            {intl.formatMessage({
                                id: `thirdAnimation.secondSection.thirdPoint.content`,
                            })}
                        </InfoSectionContent>
                    </InfoSectionContainer>
                </InfoSection>
            </Section>
            <Section imageOnLeft type={'rightToLeft'} src={thirdImage} maxWidth={'1396px'}>
                {' '}
                <InfoSection>
                    <InfoSectionContainer>
                        <InfoSectionHeader>
                            {intl.formatMessage({
                                id: `thirdAnimation.thirdSection.firstPoint.header`,
                            })}
                        </InfoSectionHeader>
                        <InfoSectionContent>
                            {intl.formatMessage({
                                id: `thirdAnimation.thirdSection.firstPoint.content`,
                            })}
                        </InfoSectionContent>
                    </InfoSectionContainer>
                    <InfoSectionContainer>
                        <InfoSectionHeader>
                            {intl.formatMessage({
                                id: `thirdAnimation.thirdSection.secondPoint.header`,
                            })}
                        </InfoSectionHeader>
                        <InfoSectionContent>
                            {intl.formatMessage({
                                id: `thirdAnimation.thirdSection.secondPoint.content`,
                            })}
                        </InfoSectionContent>
                    </InfoSectionContainer>
                    <InfoSectionContainer>
                        <InfoSectionHeader>
                            {intl.formatMessage({
                                id: `thirdAnimation.thirdSection.thirdPoint.header`,
                            })}
                        </InfoSectionHeader>
                        <InfoSectionContent>
                            {intl.formatMessage({
                                id: `thirdAnimation.thirdSection.thirdPoint.content`,
                            })}
                        </InfoSectionContent>
                    </InfoSectionContainer>
                </InfoSection>
            </Section>
        </>
    );
};

export default ThirdAnimation;
