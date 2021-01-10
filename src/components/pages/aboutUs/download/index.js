import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';

import {BiArrowToBottom} from 'react-icons/Bi';
import { Section, Links, Link, Paragraph } from './styles'

const Download = () => {
    const intl = useIntl();

    const links = [
        {
            name: "Status.pdf",
            link: "#",
        },
        {
            name: "Sprawozdanie2019",
            link: "#",
        },
        {
            name: "Sprawozdanie2018",
            link: "#",
        },
    ]

    return (
        <Section>
            <Paragraph>
               {intl.formatMessage({
                    id: `aboutUs.download`,
                })}
            </Paragraph>
            <Links>
                {links.map( element => {
                    return(
                        <Link key={element.name}>
                           <p>{element.name}</p>
                           <button><a href={element.link}>Pobierz</a><BiArrowToBottom/></button>
                        </Link>
                    )                      
                })}  
            </Links>    
        </Section>
    );
};

export default Download;