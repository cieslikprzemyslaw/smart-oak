import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import GlobalStyles from '../assets/GlobalStyles';

// import Cookie from "../components/Cookie"

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,maximum-scale=1, shrink-to-fit=no,user-scalable=no,minimal-ui,viewport-fit=cover"
                />
                <title>Smart Oak System</title>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                document.addEventListener("touchmove",
                function(e) {
                  e.preventDefault();
                }, { passive: false }
              );
`,
                    }}
                />
            </Helmet>
            {children}

            {/* <Cookie /> */}
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default injectIntl(Layout);
