import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import firstImage from '../../assets/images/third-animation-first-section.png';
import secondImage from '../../assets/images/third-animation-second-section.png';
import thirdImage from '../../assets/images/third-animation-third-section.png';
import { useIntl } from 'gatsby-plugin-intl';
const FirstSection = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100vh;
    white-space: pre;
    text-align: right;
    color: #7e7e7e;
    font-size: 52px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    flex-wrap: wrap;
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoSectionContainer = styled.div`
    margin: 60px;
    display: flex;
    flex-direction: column;
    align-items: end;
`;

const InfoSectionHeader = styled.h4`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 125.5%;
`;

const InfoSectionContent = styled.h4`
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 152%;
    text-align: left;
`;

const Title1 = styled.h2`
    text-align: left;
    font-family: Open Sans Bold;
    font-size: 52px;
    color: #7e7e7e;
    width: 55%;
`;

const Title2 = styled.h2`
    text-align: left;
    font-family: Open Sans Bold;
    font-size: 52px;
    color: #000;
    width: 55%;
`;

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
