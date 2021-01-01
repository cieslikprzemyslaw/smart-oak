import styled from 'styled-components';

const PatroniteWrapper = styled.section`
    position: relative;
    width: 100%;
    margin: 0 auto;
    background-color: #f7f6f5;
    z-index: 5;
`;

const PatroniteSection = styled.section`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: space-around;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto;
    z-index: 5;

    @media(max-width: 1024px){
        width: 100%    
    }
`;

const Logo = styled.img`
    height: 75px;
    margin-bottom: 15px;
`;

export { PatroniteWrapper, PatroniteSection, Logo };
