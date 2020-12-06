import React, { useState, useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

import InputSearch from './InputSearch';
import {SearchWrapper, DropDown, DropdownSearchLink, Backdrop} from './styles';

const Search = ({projectsList, isDesktop, onInputClose}) => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [searchLinks, setSearchLinks] = useState(projectsList);
    const [childRef, setChildRef] = useState(null);

    let wrapperRef = useRef(null)

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        gsap.to(wrapperRef.children, {
            transform: 'translateX(0)',
            opacity: 1,
            duration: 0.5,
            stagger: 0.03,
            ease: 'none',
        });
    }, );
    
    const handleRef = ref => (setChildRef(ref));

    const handleSearchInputChange = e => {
        if(e){
            setSearchPhrase(e.target.value);
            searchInMenu;
        }else (setSearchLinks(projectsList));
    };

    const clearIfEmpty = () => {
        if(searchPhrase === '')(setSearchLinks([]));
    };

    const searchInMenu = () =>{
        let links = [];
        projectsList.forEach((link) => {
            if (link.text.toLowerCase().includes(searchPhrase)) {
                links.push(link);
                links = links.filter((e, i) => links.findIndex((a) => a['text'] === e['text']) === i,);
                setSearchLinks(links);
            }
        });
    };

    const handleClickOutside = e => {
        if (wrapperRef && childRef.current && !childRef.current.contains(e.target) && !wrapperRef.contains(e.target)) {
            if (isDesktop) {onInputClose()} 
            else {
                setSearchLinks([]);
                setSearchPhrase('');
            }
        }
    };

    return (
        <section style={{width: "100%"}}>
            <SearchWrapper>
                {isDesktop ? (<BsSearch style={{ cursor: 'default', fontSize: '17px' }} />) : null}
                <InputSearch
                    handleRef={handleRef}
                    isDesktop={isDesktop}
                    onChange={(event) => {
                        handleSearchInputChange(event);
                        clearIfEmpty();
                    }}
                    value={searchPhrase}
                    ref={(InputSearch) => (this.searchbar = InputSearch)}
                />

                <DropDown ref={(node) => (wrapperRef = node)}>
                    {searchLinks
                        .filter((e, i) => i <= 5)
                        .map((link, index) => {
                            return (
                                <DropdownSearchLink
                                    onClick={onInputClose}
                                    key={index}
                                    to={link.path}
                                >
                                    {link.text}
                                </DropdownSearchLink>
                            );
                        })}
                </DropDown>
                <AiOutlineClose
                    style={{ fontSize: '22px', zIndex: '10' }}
                    onClick={isDesktop ? onInputClose : null}
                />
            </SearchWrapper>
            {isDesktop ? <Backdrop /> : null}
        </section>
    );
};

export default Search;