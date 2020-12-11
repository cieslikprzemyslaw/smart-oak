import React from 'react';

import { InfoSection, InfoSectionContainer, InfoSectionHeader, InfoSectionContent } from './styles';

const Description = ({ headers, content }) => {
    return (
        <InfoSection>
            <InfoSectionContainer>
                <InfoSectionHeader>{headers[0]}</InfoSectionHeader>
                <InfoSectionContent>{content[0]}</InfoSectionContent>
            </InfoSectionContainer>
            <InfoSectionContainer>
                <InfoSectionHeader>{headers[1]}</InfoSectionHeader>
                <InfoSectionContent>{content[1]}</InfoSectionContent>
            </InfoSectionContainer>
            <InfoSectionContainer>
                <InfoSectionHeader>{headers[2]}</InfoSectionHeader>
                <InfoSectionContent>{content[2]}</InfoSectionContent>
            </InfoSectionContainer>
        </InfoSection>
    );
};

export default Description;
