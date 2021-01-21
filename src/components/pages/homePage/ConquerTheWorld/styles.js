import styled from 'styled-components';

import ImageSrc from '../../../../assets/images/some-dude-in-cafe.png';

const Wrapper = styled.div`
    padding: 100px 0 0 0;
    position: relative;
    z-index: 3;

    @media (max-width: 800px) {
        padding: 0 0 0 0;
    }
`;

const Header = styled.h2`
    display: flex;
    flex-direction: column;
    color: black;

    width: fit-content;
    margin: 0 0 100px 5vw;

    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 52px;
    line-height: 136%;
    @media (max-width: 800px) {
        margin: 50px 0 50px 5%;
        font-size: 34px;
    }
    @media (max-width: 640px) {
        margin: 60px 5%;
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
    height: 960px;
    width: 100%;
    position: relative;
    .WhiteBox {
        display: block;
        height: 100%;

        width: 35vw;

        background: white;

        @media screen and (max-width: 1023px) {
            display: none;
        }
    }

    margin: 80px auto 0;
    background: url(${ImageSrc}) no-repeat;
    background-size: cover;
    background-position: 0 0;

    @media (max-width: 1024px) {
        background-size: auto;
        text-align: justify;
    }
    @media (max-width: 1023px) {
        min-height: 1350px;
        background: none;
        background-size: auto;
        text-align: justify;
        background-image: url(${ImageSrc});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
    }
    @media (max-width: 800px) {
        overflow-x: hidden;
        margin: 0 auto;
        min-height: 1200px;
    }
    @media (max-width: 500px) {
        min-height: 970px;
    }
`;

const Text = styled.section`
    color: white;
    max-width: 65%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 152%;
    position: absolute;
    top: 10%;
    left: 5%;
    text-align: justify;

    p {
        max-width: 90%;
        margin: 25px 0;
        line-height: 150%;

        @media (max-width: 1024px) {
            max-width: 90%;
            margin: 10px auto;
            top: 5%;
            left: 0;
        }
        @media (max-width: 800px) {
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

        @media (max-width: 1024px) {
            font-size: 26px;
            margin-bottom: 50px;
        }

        @media (max-width: 800px) {
            font-size: 24px;
        }

        @media (max-width: 640px) {
            font-size: 20px;
        }
    }

    @media (max-width: 1440px) {
        max-width: 100%;
        top: 5%;
        left: 5%;
    }

    @media screen and (max-width: 800px) {
        margin: 10px auto;
    }
    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`;
const TextWrapper = styled.section`
    color: white;
    min-width: 75%;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 152%;

    @media (max-width: 1023px) {
        min-width: 100%;
    }
`;

const Paragraph = styled.p``;
// browser doesn't see styles for less then 1024px check it
export { Wrapper, Header, ImageAndTextContainer, Text, TextWrapper, Paragraph };
