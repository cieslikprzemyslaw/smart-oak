import styled from 'styled-components';

import ImageSrc from '../../../../assets/images/some-dude-in-cafe.png';

const Wrapper = styled.div`
    padding: 100px 0;
    position: relative;
    z-index: 3;
`;

const Header = styled.h2`
    display: flex;
    flex-direction: column;
    color: black;

    width: 80%;
    margin: 100px auto 0;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    line-height: 136%;

    span {
        color: gray;
    }
`;

const ImageAndTextContainer = styled.div`
    display: flex;

    height: 960px;
    width: 100%;
    .WhiteBox {
        display: block;
        height: 100%;
        width: 35vw;
        background: white;
    }

    margin: 80px auto 0;

    background: url(${ImageSrc}) no-repeat;
    background-size: cover;

    background-position: 0 0;
`;

const Text = styled.p`
    padding-top: 50px;
    padding-bottom: 50px;
    color: white;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 152%;
    overflow: hidden;

    p {
        width: 60%;
        margin: 28px 0;
    }

    & p:first-of-type {
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 23px;
        line-height: 152%;
    }

    @media screen and (max-width: 800px) {
        font-size: 16px;
    }

    @media screen and (max-width: 700px) {
        font-size: 14px;
        overflow: scroll;
    }
`;

export { Wrapper, Header, ImageAndTextContainer, Text };
