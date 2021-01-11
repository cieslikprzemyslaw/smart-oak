import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';

import { BiArrowToBottom } from 'react-icons/Bi';
import { Section, Links, Link, Paragraph, DownloadTitle, Button, Alink } from './styles';

const Download = () => {
    const intl = useIntl();

    const links = [
        {
            name: 'Status.pdf',
            link: '#',
        },
        {
            name: 'Sprawozdanie2019',
            link: '#',
        },
        {
            name: 'Sprawozdanie2018',
            link: '#',
        },
    ];

    return (
        <Section>
            <Paragraph>
                {intl.formatMessage({
                    id: `aboutUs.filesDownload`,
                })}
            </Paragraph>
            <Links>
                {links.map((element) => {
                    return (
                        <Link key={element.name}>
                            <DownloadTitle>{element.name}</DownloadTitle>
                            <Alink href={element.link}>
                                <Button>
                                    {intl.formatMessage({
                                        id: `aboutUs.download`,
                                    })}
                                <BiArrowToBottom style={{fontSize: "22px"}}/>
                                </Button>
                            </Alink>
                            
                        </Link>
                    );
                })}
            </Links>
        </Section>
    );
};

export default Download;
