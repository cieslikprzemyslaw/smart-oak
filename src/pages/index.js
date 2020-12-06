import React, { useEffect } from 'react';

import { gsap } from 'gsap';
import styled from 'styled-components';
import Home from './home';

const Wrapper = styled.div`
    position: relative;
    z-index: 3;
    background-color: white;
`;

const IndexPage = () => {
    useEffect(() => {
        gsap.to('body', 0, { css: { visibility: 'visible' } });
    }, []);

    return (
        <Wrapper>
           <Home/>
        </Wrapper>
    );
};

export default IndexPage;
