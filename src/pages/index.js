import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import { gsap } from 'gsap';

const IndexPage = () => {
    useEffect(() => {
        gsap.to('body', 0, { css: { visibility: 'visible', backgroundColor:"#303030" } });
    }, []);
    return (
        <>
            <Nav />
        </>
    );
};

export default IndexPage;
