import styled from 'styled-components';

import ImageSrc from '../../../../assets/images/some-dude-in-cafe.png';

const Wrapper = styled.div`
    padding: 100px 0 0 0;
    position: relative;
    z-index: 3;

    @media (max-width: 800px){
        padding: 0 0 0 0;
    }
`;

const Header = styled.h2`
    display: flex;
    flex-direction: column;
    color: black;

    width: fit-content;
    margin: 0 0 100px 100px;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    line-height: 136%;
    @media (max-width: 800px){
        margin: 50px 0 50px 50px;
        font-size: 34px;
    }
    @media (max-width: 640px) {
        margin: 50px 15px;
        font-size: 34px;
    }
    @media (max-width: 360px) {
        font-size: 24px;
    }
    span {
        color: gray;
    }
`;

const ImageAndTextContainer = styled.div`
    display: flex;
    min-height: 960px;
    width: 100%;
    .WhiteBox {
        display: block;
        height: 100%;

        width: 35vw;

        background: white;

        @media (max-width: 800px){
            display: none;
        }

    }

    margin: 80px auto 0;
    background-image: url(${ImageSrc});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;

    @media (max-width: 1024px) {
        background-size: auto;
        text-align: justify;
    }
    @media (max-width: 800px){
        overflow-x: hidden;
        margin: 0 auto;
    }
`;

const Text = styled.p`
    margin: 65px 0px 0px 0;
    color: white;

    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 152%;
    overflow: hidden;

    p {
        max-width: 75%;
        margin: 25px 0;
        line-height: 170%;
        @media (max-width: 1024px) {
            max-width: 85%;
            margin: 10px auto;
        }
        @media (max-width: 800px){
            font-size: 20px;
        }
        @media (max-width: 640px) {
            margin: 25px auto;
            font-size: 16px;
        }
    }

    & p:first-of-type {
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 150%;

        @media (max-width: 1024px){
            font-size: 26px;
            margin-bottom: 50px;
        }

        @media (max-width: 800px){
            font-size: 24px;
        }

        @media (max-width: 640px){
            font-size: 20px;
        }
    }

    @media screen and (max-width: 800px) {
        margin: 10px auto;
    }
    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`;
// browser doesn't see styles for less then 1024px check it
export { Wrapper, Header, ImageAndTextContainer, Text };
