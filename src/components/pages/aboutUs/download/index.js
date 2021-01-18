import React from 'react';

import { useIntl } from 'gatsby-plugin-intl';

import { BiArrowToBottom } from 'react-icons/bi';
import { Section, Links, Link, Paragraph, DownloadTitle, Button, Alink } from './styles';

const Download = () => {
    const intl = useIntl();

    const links = [
        {
            name: 'Statut Fundacji',
            link:
                'https://drive.google.com/file/d/11gSIQrQHo6hedvfYHYSfGdVKlhZjgpad/view?usp=sharing',
        },
        {
            name: 'Sprawozdanie Finansowe 2019',
            link:
                'https://drive.google.com/file/d/1FIuHUPXaencDvlgV4t1-H7ZWY-fq2dwJ/view?usp=sharing',
        },
        {
            name: 'Bilans 2019',
            link:
                'https://drive.google.com/file/d/1Cfejj_3v9oHldP5olsjiaYinARbIs9He/view?usp=sharing',
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
                                    <BiArrowToBottom style={{ fontSize: '22px' }} />
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
