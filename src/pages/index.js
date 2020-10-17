import React, { useEffect } from 'react';
import SecondAnimation from '../components/SecondAnimation';
 
import { gsap } from 'gsap';

const IndexPage = () => {
    useEffect(() => {
        gsap.to('body', 0, { css: { visibility: 'visible' } });
    }, []);
    return (
        <>
            <SecondAnimation />
 
        </>
    );
};

export default IndexPage;
