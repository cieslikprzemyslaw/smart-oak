import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import imgSrc1 from '../../../assets/images/opportunities.png';
import imgSrc2 from '../../../assets/images/pexels-cottonbro-3584926.png';
import imgSrc3 from '../../../assets/images/reading.png';
import imgSrc4 from '../../../assets/images/moreInfo-photo.jpg';
import { gsap } from 'gsap';
import { useIntl } from 'gatsby-plugin-intl';

const SectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 3;
    /* margin: 7rem 0 20rem; */

    height: 100vh;
    @media screen and (max-width: 900px) {
        display: block;
    }
`;
const TitleContainer = styled.div`
    margin-left: 11rem;
    z-index: 34;

    @media screen and (max-width: 1000px) {
        margin-left: 2rem;
    }
    @media screen and (max-width: 900px) {
        /* margin-left: 2rem; */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-left: 0;
    }
`;

const Title1 = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 5.2rem;
    line-height: 119%;
    color: #0e0e0e;
    margin-bottom: 6px;
    @media screen and (max-width: 900px) {
        color: #fff;
    }
    @media screen and (max-width: 500px) {
        font-size: 3.6rem;
    }
`;

const Title2 = styled.h3`
    font-weight: bold;
    font-size: 6.4rem;
    display: inline-block;
    line-height: 119%;
    padding-bottom: 5px;
    color: #0e0e0e;
    margin-bottom: 4rem;
    border-bottom: 5px solid #1b6831;
    @media screen and (max-width: 900px) {
        text-align: center;
        margin-left: 0;
        color: #fff;
    }
    @media screen and (max-width: 500px) {
        font-size: 4rem;
    }
`;
const Image = styled.img`
    width: 45%;
    height: 100vh;
    object-fit: cover;
    justify-self: flex-end;
    object-position: right;
    align-self: flex-end;

    @media screen and (max-width: 900px) {
        position: absolute;
        top: 0px;
        left: 0px;
        /* object-fit: contain; */
        width: 100%;
        /* height: 100vh; */
        filter: brightness(50%);
    }
`;
const ItemsContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;
const Item = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const DescriptionContainer = styled.div`
    margin-right: 7rem;
    padding-left: 7rem;
    width: 50%;
    z-index: 12;
    @media screen and (max-width: 1250px) {
        margin-right: 3rem;
        padding-left: 3rem;
    }
    @media screen and (max-width: 900px) {
        width: 88%;
    }
    @media screen and (max-width: 500px) {
        width: 95%;
        margin-right: 1rem;
        padding-left: 2rem;
    }

    p {
        font-size: 20px;
        line-height: 27.3px;
        margin-top: 3rem;
        @media screen and (max-width: 1250px) {
            font-size: 18px;
            line-height: 25.3px;
        }
        @media screen and (max-width: 900px) {
            font-size: 16px;
            line-height: 20px;
            color: #fff;
            margin-top: 1rem;
        }
    }
`;

const Opportunities = () => {
    const sectionRef = useRef(null);
    const elem1TextRef = useRef(null);
    const elem1ImgRef = useRef(null);
    const elem2TextRef = useRef(null);
    const elem2ImgRef = useRef(null);
    const elem3TextRef = useRef(null);
    const elem3ImgRef = useRef(null);
    const elem4TextRef = useRef(null);
    const elem4ImgRef = useRef(null);
    const intl = useIntl();

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: sectionRef.current,
                start: 'top top',
                end: '+=' + window.innerHeight * 2,
                scrub: 0.5,
            },
        });
        const scene = (descRef, imgRef) => {
            let tl = gsap.timeline();

            tl.from(descRef.current, { y: '+=500', opacity: 0 })
                .from(imgRef.current, { opacity: 0 }, '<')
                .to(descRef.current, { y: '-=500', opacity: 0, delay: 2 })
                .to(imgRef.current, { opacity: 0 }, '<');
            return tl;
        };
        tl.to(elem1TextRef.current, { y: '-=500', opacity: 0 })
            .to(elem1ImgRef.current, { opacity: 0 }, '<')
            .add(scene(elem2TextRef, elem2ImgRef))
            .add(scene(elem3TextRef, elem3ImgRef))
            .from(elem4TextRef.current, { y: '+=500', opacity: 0 })
            .from(elem4ImgRef.current, { opacity: 0 }, '<');
    }, []);

    return (
        <div>
            <SectionContainer ref={sectionRef}>
                <ItemsContainer>
                    <Item>
                        <TitleContainer ref={elem1TextRef}>
                            <Title1>
                                {intl.formatMessage({
                                    id: `opportunitiesSection.title1`,
                                })}{' '}
                            </Title1>
                            <Title2>
                                {intl.formatMessage({
                                    id: `opportunitiesSection.title2`,
                                })}
                            </Title2>
                        </TitleContainer>
                        <Image src={imgSrc1} ref={elem1ImgRef} />
                    </Item>
                    <Item>
                        <DescriptionContainer ref={elem2TextRef}>
                            <p>
                                <b>
                                    {intl.formatMessage({
                                        id: `opportunitiesSection.block1.bold`,
                                    })}
                                </b>{' '}
                                {intl.formatMessage({
                                    id: `opportunitiesSection.block1.description`,
                                })}
                            </p>
                            <p>
                                <b>
                                    {intl.formatMessage({
                                        id: `opportunitiesSection.block2.bold`,
                                    })}
                                </b>{' '}
                                {intl.formatMessage({
                                    id: `opportunitiesSection.block2.description`,
                                })}
                            </p>
                            <p>
                                <b>
                                    {intl.formatMessage({
                                        id: `opportunitiesSection.block3.bold`,
                                    })}
                                </b>{' '}
                                {intl.formatMessage({
                                    id: `opportunitiesSection.block3.description`,
                                })}
                            </p>
                        </DescriptionContainer>
                        <Image src={imgSrc2} ref={elem2ImgRef} />
                    </Item>
                    <Item>
                        <DescriptionContainer ref={elem3TextRef}>
                            <p>
                                <b>
                                    {intl.formatMessage({
                                        id: `opportunitiesSection.block4.bold`,
                                    })}
                                </b>{' '}
                                {intl.formatMessage({
                                    id: `opportunitiesSection.block4.description`,
                                })}
                            </p>
                            <p>
                                <b>
                                    {intl.formatMessage({
                                        id: `opportunitiesSection.block5.bold`,
                                    })}
                                </b>{' '}
                                {intl.formatMessage({
                                    id: `opportunitiesSection.block5.description`,
                                })}
                            </p>
                            <p>
                                <b>
                                    {intl.formatMessage({
                                        id: `opportunitiesSection.block6.bold`,
                                    })}
                                </b>{' '}
                                {intl.formatMessage({
                                    id: `opportunitiesSection.block6.description`,
                                })}
                            </p>
                        </DescriptionContainer>
                        <Image src={imgSrc3} ref={elem3ImgRef} />
                    </Item>

                    <Item>
                        <DescriptionContainer ref={elem4TextRef}>
                            <p>
                                <b>
                                    {intl.formatMessage({
                                        id: `opportunitiesSection.block7.bold`,
                                    })}
                                </b>{' '}
                                {intl.formatMessage({
                                    id: `opportunitiesSection.block7.description`,
                                })}
                            </p>
                            <p>
                                <b>
                                    {intl.formatMessage({
                                        id: `opportunitiesSection.block8.bold`,
                                    })}
                                </b>{' '}
                                {intl.formatMessage({
                                    id: `opportunitiesSection.block8.description`,
                                })}
                            </p>
                            <p>
                                <b>
                                    {intl.formatMessage({
                                        id: `opportunitiesSection.block9.bold`,
                                    })}
                                </b>{' '}
                                {intl.formatMessage({
                                    id: `opportunitiesSection.block9.description`,
                                })}
                            </p>
                        </DescriptionContainer>
                        <Image src={imgSrc4} ref={elem4ImgRef} />
                    </Item>
                </ItemsContainer>
            </SectionContainer>
        </div>
    );
};
export default Opportunities;
