import React from 'react';
import styled from 'styled-components';
import moreInfoImage from '../../assets/images/ee0b4f1923892e73fdae2ce30834984b.jpg';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 4rem 7rem;

    @media only screen and (max-width: 1000px) {
     flex-direction: column-reverse;
     align-items: center;
     text-align: center;

     h3{
         margin: 21px auto 0;
     }
    }

`;
const HeadingAndTitle = styled.div`

 
        
        h3{
            border-bottom: 3px solid #4099C0;
            width: 180px;
            font-weight: bold;
            font-size: 24px;
           
        }
        
        p{
            margin-top: 39px;
            width: 401px;

 
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 25px;
        }
`;

const Image = styled.img`

    width: 489px;
    height: 353px;
`;
 
function MoreInfo() {


    return (
       <Container>
        <HeadingAndTitle>
            <h3>TYTUŁ SEKCJI</h3>
            <p>Risus, diam massa leo nulla diam, facilisis hac. Consectetur urna morbi id congue vitae vel vitae sodales at. Gravida quis tortor natoque viverra risus, praesent libero tortor. Ac amet eget consectetur nunc aliquet dignissim erat velit. Diam neque massa dignissim felis id. Dolor et quis viverra porttitor.
Pretium ultrices pretium magna facilisis volutpat, lectus a. Vitae id lectus venenatis, elementum a pellentesque risus, nunc. Id est, at nullam lectus eu consequat nam. Commodo malesuada suspendisse dictum pellentesque duis. </p>
        </HeadingAndTitle>
        <Image src={moreInfoImage}></Image>
        </Container>
    );
}

export default MoreInfo;