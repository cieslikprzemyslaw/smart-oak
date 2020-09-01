import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import Nav from '../components/Nav';
const StyledHeading = styled.h1`
    color: ${({ theme: { colors } }) => colors.underline1};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.big};
`;

const IndexPage = () => {
    const intl = useIntl();

    return (
        <>
        <Nav />
            <StyledHeading>
                {intl.formatMessage({
                    id: 'homePage.test',
                })}
            </StyledHeading>
        </>
    );
};

export default IndexPage;
