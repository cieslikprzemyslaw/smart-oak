import styled from 'styled-components';
import { MdCopyright } from 'react-icons/md';

const Section = styled.footer`
    width: 100%;
    height: 45px;
    background: #0e0e0e;
    padding: 17px 0;
    position: relative;
    z-index: 3;
`;

const Container = styled.div`
    position: relative;
    z-index: 3;
    width: 90%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
`;

const Copy = styled.div`
    display: flex;
    width: fit-content;
    @media screen and (max-width: 1300px) {
        width: fit-content;
    }
    @media screen and (max-width: 1100px) {
        width: fit-content;
    }
    @media screen and (max-width: 900px) {
        justify-content: center;
        margin-top: 2rem;
    }
`;

const CopyCompany = styled.h2`
    font-style: normal;
    font-weight: normal;
    width: content;
    margin-top: 2px;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
`;

const StyledCopyLogo = styled(MdCopyright)`
    font-size: 1.5rem;
    fill: #ffffff;
    margin-right: 8px;
`;

export { Section, Container, Copy, CopyCompany, StyledCopyLogo };
