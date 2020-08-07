import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const NotFoundPage = () => {
    const intl = useIntl();

    return (
        <>
            <h1>
                {intl.formatMessage({
                    id: 'notFoundPage.test',
                })}
            </h1>
        </>
    );
};

export default NotFoundPage;
