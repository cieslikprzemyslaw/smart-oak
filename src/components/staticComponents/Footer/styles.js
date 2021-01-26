import styled from 'styled-components';

const Section = styled.footer`
    font-family: Open Sans;
    width: 100%;
    height: 168px;
    padding: 1rem 4rem;
    background: none;
    border-top: 1px solid #c1c1c1;
    position: absolute;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    transform: translateY(-168px);

    @media (max-width: 850px) {
        height: 310px;
        transform: translateY(-310px);
        padding: 2rem;
    }
`;

const FirstLine = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        height: 60%;
    }

    @media (max-width: 500px) {
        align-items: flex-start;
    }
`;

const SecondLine = styled(FirstLine)`
    @media (max-width: 850px) {
        height: 40%;
        margin-top: 2rem;
        text-align: center;
        align-items: center;
    }
`;

const Paragraph = styled.p`
    font-weight: normal;
    font-size: 14px;
    color: #575757;

    @media (max-width: 850px) {
        position: absolute;
        top: 6rem;
    }

    @media (max-width: 500px) {
        left: 1rem;
    }
`;

const Link = styled.button`
    margin-right: 3rem;
    padding: 1rem;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #575757;
    text-decoration: none;

    @media (max-width: 850px) {
        margin: 0 2rem;
    }

    @media (max-width: 500px) {
        margin: 0 1rem 0 0;
    }
`;

const DownloadApp = styled.button`
    position: relative;
    width: 207px;
    height: 45px;
    padding: 0.6rem 0 0.5rem 0.5rem;
    margin: 0 0 0 2rem;
    background: #252525;
    border-radius: 6px;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: left;
    font-size: 3rem;
    outline: none;
    filter: greyscale(1);

    // &: hover {
    //     cursor: pointer;
    // }

    &: before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 6px;
        background: rgba(226, 226, 226, 0.63);
    }

    @media (max-width: 850px) {
        margin: 0.5rem;
    }
`;

const Apps = styled.div`
    width: 550px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 850px) {
        width: 100%;
        justify-content: center;
    }
`;

const Policy = styled.div`
    text-align: right;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #808080;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: space-around;

    @media (max-width: 850px) {
        align-items: center;
    }
`;

const PrivacyPolicy = styled.button`
    text-decoration: none;
    color: #808080;
    margin-top: 1rem;
`;

const AppDesc = styled.p`
    font-weight: normal;
    font-size: 11px;
    line-height: 15px;
`;

const StoreName = styled.p`
    font-weight: 600;
    font-size: 12px;
`;

export {
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
};
