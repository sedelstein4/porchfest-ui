import React from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const searchedBG ={
    background: "rgba(212, 175, 205, 0.25)",
    transition: "background 0.5s linear"
};

export default function SearchBar() {
    const [state, setState] = useState('initial')
    let bgstyle;

    const searchSubmit = (event) =>{
        event.preventDefault();
        setState('searched')
    }

    if (state === 'searched'){
        bgstyle = searchedBG;
    }

    async function handleSearchChange(e) {
        const response = await fetch('http://localhost:5000/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                Authorization: 'Bearer ',
            },
            body: JSON.stringify({entry: e.target.value}),
        });
        const searchData = await response.json()

        console.log(searchData)

        return { searchData };
    }

    return (
        <Styles.barContainer style={bgstyle}>
            <Styles.searchBar>
                <form onSubmit = {(event) => searchSubmit(event)}>
                    <input
                        type={"text"}
                        id={"search"}
                        name={"search"}
                        placeholder={"Artists or Genres"}
                        onChange={handleSearchChange}
                    />
                </form>
                <Styles.icon>
                    <FontAwesomeIcon icon={faSearch} />
                </Styles.icon>
            </Styles.searchBar>
        </Styles.barContainer>
    )
}

