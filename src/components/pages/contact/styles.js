import styled from 'styled-components';

export const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr 1fr;
    padding: 87px 40px 0 130px;

    h1 {
        font-size: 52px;
        grid-column: 1 / span 2;
        grid-row: 1 / 2;
    }
    p {
        font-size: 14px;
    }

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        padding: 87px 60px 400px 60px;
    }
    @media (max-width: 450px) {
        padding: 87px 30px 400px 30px;
    }
`;

export const ContactDetails = styled.div`
    margin-top: 65px;
    min-height: 130px;
    h2 {
        font-size: 28px;
        margin-bottom: 7px;
    }
    p {
        line-height: 19px;
    }
`;
export const BoldParagraph = styled.p`
    margin-top: 20px;
    font-weight: 600;
`;
export const ContactForm = styled.div`
    margin-top: 65px;
    min-height: 130px;
    h2 {
        font-size: 28px;
        margin-bottom: 14px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    label {
        margin-top: 13px;
        display: flex;
        flex-direction: column;
        p {
            margin-bottom: 6px;
        }
    }
    input {
        font-size: 14px;
        padding-left: 8px;
        width: 90%;
        height: 36px;
        border-radius: 6px;
        border: 1px solid #d4d4d4;
        @media (max-width: 900px) {
            width: 100%;
        }
    }
    textarea {
        padding: 8px;
        font-family: Open Sans;
        width: 90%;
        height: 200px;
        border-radius: 6px;
        border: 1px solid #d4d4d4;
        font-size: 14px;
        @media (max-width: 900px) {
            width: 100%;
        }
    }
    button {
        cursor: pointer;
        font-family: Open Sans;
        margin-top: 35px;
        margin-left: calc(45% - 64px);
        width: 126px;
        height: 36px;
        border-radius: 6px;
        background: #3a3a3a;
        color: #fff;
        transition: all 0.4s;
        &:hover {
            transform: scale(1.1);
        }
    }

    span {
        color: red;
        font-weight: 500;
        font-size: 14px;
        &::before {
            display: inline;
            content: '⚠ ';
        }
    }
`;
