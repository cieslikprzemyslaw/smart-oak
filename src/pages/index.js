import React, { useRef } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import Nav from '../components/Nav';
import MobileNav from '../components/MobileNav';
import VideoSection from '../components/VideoSection';
import ProjetsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import MoreInfo from '../components/MoreInfo';
const StyledHeading = styled.h1`
    color: ${({ theme: { colors } }) => colors.underline1};
    font-size: ${({ theme: { fontSizes } }) => fontSizes.big};
`;

const IndexPage = () => {
    const intl = useIntl();

    return (
        <>
            <div className="pinSection">
                <Nav />
                <MobileNav />
                <VideoSection />
            </div>
            <ProjetsSection />
            <MoreInfo />
            <Footer />
        </>
    );
};

export default IndexPage;
