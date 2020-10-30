import React, { useRef, useEffect } from 'react';
import ImageSrc from '../../assets/images/forest-background-cropped.png';
import { scaleImgOnScroll, pinContent } from './Animate';
import {
    AnimationContentParagraph,
    AnimationContainer,
    StyledImg,
    AnimationContent,
    AnimationContentHeader,
    AfterAnimationContainer,
    AfterAnimationContentParagraph,
    AfterAnimationContentHeader,
    FourthAnimationExtended,
} from './styles.js';

const FourthAnimation = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        scaleImgOnScroll(imgRef.current);
        pinContent(imgRef.current);
    }, []);

    return (
        <FourthAnimationExtended>
            <AnimationContainer>
                <StyledImg src={ImageSrc} ref={imgRef} />
                <AnimationContent id="fourth-animation-content">
                    <AnimationContentHeader>
                        <h2>
                            Smart Oak to przede wszystkim przestrzeń dla społeczeństwa projektowego.
                        </h2>
                    </AnimationContentHeader>
                    <AnimationContentParagraph>
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
                    </AnimationContentParagraph>
                </AnimationContent>
            </AnimationContainer>
            <AfterAnimationContainer>
                <AfterAnimationContentHeader>
                    <h2>
                        System stwarza też możliwość brania działu w e-wolontariacie – każdy z
                        odpowiednimi kompetencjami będzie mógł się zaangażować w pomoc młodzieży.
                    </h2>
                </AfterAnimationContentHeader>
                <AfterAnimationContentParagraph>
                    <p>
                        Dzięki takiemu rozwiązaniu swoimi kompetencjami będzie mógł wspierać każdy,
                        kto posiada doświadczenie projektowe. Użytkownicy naszego portalu będą mogli
                        personalizować swoje profile, czyniąc je atrakcyjniejszymi dla innych.
                        Zwiększy to szansę na otrzymanie zaproszeń do uczestnictwa w projektach od
                        innych grup projektowych lub pomoże znaleźć pracę marzeń. Ocena wszystkich
                        podjętych działań na platformie będzie kończyć się z początkiem wakacji,
                        natomiast podsumowanie odbędzie się podczas kilkudniowego wydarzenia w
                        sierpniu. Rozdamy wtedy stypendia i wyróżnienia. Konferencja Smart Oak
                        Projects pozwoli przedstawić ranking najlepszych projektów i szkół oraz
                        zaprezentować najlepsze projekty od strony ich realizacji. Do zobaczenia na
                        naszym portalu. Łap motywację i podbijaj świat projektami!
                    </p>
                </AfterAnimationContentParagraph>
            </AfterAnimationContainer>
        </FourthAnimationExtended>
    );
};

export default FourthAnimation;
