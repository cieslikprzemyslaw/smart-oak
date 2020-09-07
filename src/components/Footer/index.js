import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SocialMedia from '../VideoSection/SocialMedia';
import { MdCopyright } from 'react-icons/md';
function Footer() {
    const StyledFooter = styled.footer`
        width: 100%;
        background: #0e0e0e;

        padding: 17px 0;

        .container {
            width: 80%;
            margin: 0 auto;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            @media screen and (max-width: 600px) {
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
            }
        }
        .logo {
            display: flex;
            @media screen and (max-width: 600px) {
                order: 5;
                margin-top: 2rem;
            }
        }
        .company-name {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            color: #ffffff;
        }

        .copyright {
            font-size: 1.5rem;
            fill: #ffffff;
            margin-right: 8px;
        }
    `;

    return (
        <StyledFooter>
            <div className="container">
                <div className="logo">
                    <MdCopyright className="copyright" />
                    <h1 className="company-name">Smart Oak System 2020</h1>
                </div>
                <SocialMedia footer />
            </div>
        </StyledFooter>
    );
}

export default Footer;
