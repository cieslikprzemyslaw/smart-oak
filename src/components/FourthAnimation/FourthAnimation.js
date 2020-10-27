import React, { useRef, useEffect } from 'react';
import ImageSrc from '../../assets/images/forest-background-cropped.png';
import { scaleImgOnScroll, showContent } from './Animate';
import { ContentParagraph, Container, StyledImg, Content, ContentHeader } from './styles.js';

const FourthAnimation = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        scaleImgOnScroll(imgRef.current);
        showContent(imgRef.current);
    }, []);

    return (
        <>
            <Container>
                <StyledImg src={ImageSrc} ref={imgRef} />
                <Content id="fourth-animation-content">
                    <ContentHeader>
                        <h2>
                            Smart Oak to przede wszystkim przestrzeń dla społeczeństwa projektowego.
                        </h2>
                    </ContentHeader>
                    <ContentParagraph>
                        <p>
                            Znajdzie się tu miejsce dla społecznych wilków, fanów startupów,
                            naukowców, organizatorów wydarzeń, a także przedsiębiorców. Inwestorzy,
                            sponsorzy i aniołowie biznesu również znajdą tu ciekawe możliwości.
                            Każdy projekt można w łatwy sposób wspierać finansowo. Platforma pozwala
                            każdemu aktywnie udzielać się w grupach informacyjnych. Przyczyni się to
                            do poznania innych pasjonatów, z którymi wspólnie można rozwijając swoje
                            zainteresowania i realizować nowe projekty. System stwarza też możliwość
                            brania działu w e-wolontariacie – każdy z odpowiednimi kompetencjami
                            będzie mógł się zaangażować w pomoc młodzieży.
                        </p>
                    </ContentParagraph>
                </Content>
            </Container>
        </>
    );
};

export default FourthAnimation;
