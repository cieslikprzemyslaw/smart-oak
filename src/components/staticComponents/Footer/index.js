import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import SocialMedia from '../../common/SocialMedia';
import {
    Section,
    FirstLine,
    SecondLine,
    Paragraph,
    Link,
    Policy,
    PrivacyPolicy,
    DownloadApp,
    AppDesc,
    StoreName,
    Apps,
} from './styles';
import { AiFillApple } from 'react-icons/ai';
import { RiGooglePlayFill } from 'react-icons/ri';

const Footer = () => {
    const intl = useIntl();
    return (
        <Section>
            <FirstLine>
                <div>
                    <Link as="a" href="#">
                        {intl.formatMessage({
                            id: `footer.donate`,
                        })}
                    </Link>
                    <Link as="a" href="#">
                        {intl.formatMessage({
                            id: `footer.contact`,
                        })}
                    </Link>
                </div>
                <Apps>
                    <Paragraph>
                        {intl.formatMessage({
                            id: `footer.soon`,
                        })}
                    </Paragraph>
                    <DownloadApp>
                        <AppDesc>
                            {intl.formatMessage({
                                id: `footer.downloadApp`,
                            })}
                            <br />{' '}
                            <StoreName>
                                {intl.formatMessage({
                                    id: `footer.appStore`,
                                })}
                            </StoreName>
                        </AppDesc>
                        <AiFillApple />
                    </DownloadApp>
                    <DownloadApp>
                        <AppDesc>
                            {intl.formatMessage({
                                id: `footer.downloadApp`,
                            })}
                            <br />
                            <StoreName>
                                {intl.formatMessage({
                                    id: `footer.googlePlay`,
                                })}
                            </StoreName>
                        </AppDesc>
                        <RiGooglePlayFill />
                    </DownloadApp>
                </Apps>
            </FirstLine>
            <SecondLine>
                <SocialMedia footer />
                <Policy>
                    <p>
                        &copy;
                        {intl.formatMessage({
                            id: `footer.smartOakRights`,
                        })}
                    </p>
                    <PrivacyPolicy as="a" href="#">
                        {intl.formatMessage({
                            id: `footer.privacyPolicy`,
                        })}
                    </PrivacyPolicy>
                </Policy>
            </SecondLine>
        </Section>
    );
};

export default Footer;
