import Head from "next/head";
import Header from "../components/Navigation/Header";
import SearchBar from "../components/Search/SearchBar"
import * as Styles from "../components/Search/styles"
import {faAngleRight, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import Default from "../layouts/default";

const searchedBG ={
    background: "rgba(212, 175, 205, 0.25)",
    transition: "background 0.5s linear"
};

// function SearchBar() {
//     const [state, setState] = useState('initial')
//     let bgstyle;
//
//     const searchSubmit = (event) =>{
//         event.preventDefault();
//         setState('searched')
//     }
//
//     if (state === 'searched'){
//         bgstyle = searchedBG;
//     }

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
    const searchFetch = await response.json()

    // console.log(searchFetch)

    return { searchFetch };

    // setSearchData(searchFetch.searchData);
}


export default function Search(data) {
    console.log(data)

    const [
        searchData,
        setSearchData
    ] = useState(data);

    async function refresh(e) {
        const refreshedProps = await handleSearchChange(e);
        setSearchData(refreshedProps.searchFetch);
    }

    console.log(searchData.artists)
    return (
        <div>
            <div className="content">
                <Head>
                    <title>Search</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>

            <Styles.barContainer>
                <Styles.searchBar>
                    <form onSubmit = {(event) => searchSubmit(event)}>
                        <input
                            type={"text"}
                            id={"search"}
                            name={"search"}
                            placeholder={"Artists or Genres"}
                            onChange={refresh}
                        />
                    </form>
                    <Styles.icon>
                        <FontAwesomeIcon icon={faSearch} />
                    </Styles.icon>
                </Styles.searchBar>
            </Styles.barContainer>

            <Styles.resultContainer>
                <Styles.artistResults>
                    <h1>Artists</h1>
                {searchData.artists ? searchData.artists.slice(0).map((artist, i) => {
                    return (
                            <Styles.searchItem key={artist.artist.id}>
                            <img
                                src={artist.artist.photo}
                            />
                            <div>
                                <Styles.resultName>{artist.artist.name}</Styles.resultName>
                                <Styles.resultType>{artist.artist.genre[0]}</Styles.resultType>
                            </div>
                            <Styles.resultIcon>
                                <FontAwesomeIcon icon={faAngleRight}/>
                            </Styles.resultIcon>
                            </Styles.searchItem>
                    )
                }) : <h4>No artists found.</h4>}
                </Styles.artistResults>

                <Styles.genreResults>
                    <h1>Genres</h1>
                {searchData.genres ? searchData.genres.slice(0).map((genre, i) => {
                    return (
                            <Styles.searchItem key={genre.genre.id}>
                                <img
                                    src={"/images/profile.jpeg"}
                                />
                                <div>
                                    <Styles.resultName>{genre.genre.name}</Styles.resultName>
                                </div>
                                <Styles.resultIcon>
                                    <FontAwesomeIcon icon={faAngleRight}/>
                                </Styles.resultIcon>
                            </Styles.searchItem>
                    )
                }) : <h4>No genres found.</h4>}
                </Styles.genreResults>
                            </Styles.resultContainer>
        </div>
    )}

// export async function getStaticProps( context ) {
//     const response = await fetch('http://localhost:5000/search', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             Accept: 'application/json',
//             Authorization: 'Bearer ',
//         },
//         body: JSON.stringify({entry: ""}),
//     });
//     const searchFetch = await response.json()
//
//     return {
//         props:
//             searchFetch
//     }
// }

Search.getLayout = function getLayout(page) {
    return (
        <Default title={"Search"} pageType={"search"}>
            {page}
        </Default>
    )
}