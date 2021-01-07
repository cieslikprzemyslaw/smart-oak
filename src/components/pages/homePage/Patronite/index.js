import React from 'react';

import { PatroniteSection, Logo, PatroniteWrapper } from './styles';
import cymon from '../../../../assets/images/cymon-frontdev-logo.png';
import drMasa from '../../../../assets/images/dm-doktor-masa-logo.png';
import fizjosens from '../../../../assets/images/fizjosens-logo.png';
import imperia from '../../../../assets/images/impera-logo.png';
import pzu from '../../../../assets/images/pzu-logo.png';
import kontenty from '../../../../assets/images/studio-kontenty-logo.png';
import wedka from '../../../../assets/images/wedka-stowarzyszenie-logo.png';

const Patronite = () => {
    const patronites = [
        [cymon, 'cymon-frontdev-logo'],
        [drMasa, 'dr-masa-logo'],
        [fizjosens, 'fizjosens-logo'],
        [imperia, 'imperia-logo'],
        [pzu, 'pzu-logo'],
        [kontenty, 'kontenty-logo'],
        [wedka, 'wedka-logo'],
    ];

    return (
        <PatroniteWrapper>
            <PatroniteSection>
                {patronites.map((logo) => {
                    return <Logo src={logo[0]} alt={logo[1]} key={logo[1]} />;
                })}
            </PatroniteSection>
        </PatroniteWrapper>
    );
};
export default Patronite;
