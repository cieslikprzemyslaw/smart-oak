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
    align-items: center;
    height: 100%;
    white-space: pre;
    text-align: right;
    color: #7e7e7e;
    font-size: 52px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    line-height: 136%;
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

const ThirdAnimation = () => {
    const intl = useIntl();
    return (
        <>
            <Section imageOnLeft type={'zoomIn'} src={firstImage}>
                <FirstSection>
                    {intl.formatMessage({
                        id: `thirdAnimation.firstSection.headerFirstPart`,
                    })}
                    <br />{' '}
                    {intl.formatMessage({
                        id: `thirdAnimation.firstSection.secondPart`,
                    })}
                </FirstSection>
            </Section>
            <Section type={'zoomOut'} src={secondImage}>
                <InfoSection>
                    <InfoSectionContainer>
                        <InfoSectionHeader>
                            {' '}
                            {intl.formatMessage({
                                id: `thirdAnimation.secondSection.header`,
                            })}
                        </InfoSectionHeader>
                        <InfoSectionContent>
                            Stypendia i punkty zdobywane podczas realizacji projektów pomogą w
                            dalszym motywowaniu i szkoleniu się. Fundacja oferuje granty dla
                            najbardziej zaangażowanych uczestników oraz możliwość uzyskania
                            referencji, co ma realny wpływ na zaistnienie w wybranym zawodzie.
                        </InfoSectionContent>
                    </InfoSectionContainer>
                    <InfoSectionContainer>
                        <InfoSectionHeader>
                            Kontakt z partnerami i współorganizatorami
                        </InfoSectionHeader>
                        <InfoSectionContent>
                            Kontakt z partnerami i współorganizatorami nie zawsze jest
                            ogólnodostępny, a platforma online wychodzi temu problemowi naprzeciw.
                            Bezpośredni kontakt z partnerami podczas wspólnej pracy jest kluczowym
                            elementem usprawniającym realizację projektu.
                        </InfoSectionContent>
                    </InfoSectionContainer>
                    <InfoSectionContainer>
                        <InfoSectionHeader>Narzędzia projektowe</InfoSectionHeader>
                        <InfoSectionContent>
                            Narzędzia projektowe dostępne w jednym miejscu razem z zaawansowanym
                            komunikatorem. Doceni to każdy, kto już miał okazję brać udział w
                            realizacji projektów. Nasz system posiada dyski z możliwością tworzenia
                            dokumentów i ankiet, taskery, mapy myśli i wiele innych przydatnych
                            rozwiązań.
                        </InfoSectionContent>
                    </InfoSectionContainer>
                </InfoSection>
            </Section>
            <Section imageOnLeft type={'rightToLeft'} src={thirdImage} maxWidth={'1396px'}>
                {' '}
                <InfoSection>
                    <InfoSectionContainer>
                        <InfoSectionHeader>Wzrost kompetencji zawodowych</InfoSectionHeader>
                        <InfoSectionContent>
                            Wzrost kompetencji zawodowych a także innych umiejętności miękkich
                            takich jak komunikacja czy inteligencja emocjonalna, są istotne w
                            przyszłej pracy, niezależnie od stanowiska czy rodzaju zatrudnienia.
                        </InfoSectionContent>
                    </InfoSectionContainer>
                    <InfoSectionContainer>
                        <InfoSectionHeader>Aniołowie biznesu i sponsorzy</InfoSectionHeader>
                        <InfoSectionContent>
                            Aniołowie biznesu i sponsorzy obecni na platformie chętnie zainteresują
                            się twoimi projektami. W grupach można na bieżąco informować o postępach
                            za pomocą postów publicznych. Daj się zauważyć! To szansa na wsparcie
                            nie tylko merytoryczne, ale i finansowe.
                        </InfoSectionContent>
                    </InfoSectionContainer>
                    <InfoSectionContainer>
                        <InfoSectionHeader>Szkolenia i wydarzenia</InfoSectionHeader>
                        <InfoSectionContent>
                            Szkolenia i wydarzenia, które będą znajdować się na platformie, nie
                            tylko ułatwią kontakt z partnerami, ale przede wszystkim pomogą zdobyć
                            cenną wiedzę i umiejętności. Zwykle są to szkolenia płatne, jednak
                            uczestnicy platformy mają prawie wszystkie szkolenia za darmo.
                        </InfoSectionContent>
                    </InfoSectionContainer>
                </InfoSection>
            </Section>
        </>
    );
};

export default ThirdAnimation;
