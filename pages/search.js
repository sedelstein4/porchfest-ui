import Head from "next/head";
import Header from "../components/Navigation/Header";
import * as Styles from "../components/Search/styles"
import {faAngleRight, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import Default from "../layouts/default";
import Link from "next/link";

async function handleSearchChange(e,location) {
    let searchKeyWord
    if (location == 'old') {
        searchKeyWord = e
        localStorage.setItem('searchKeyWord', e)
    } else {
        searchKeyWord = e.target.value
        localStorage.setItem('searchKeyWord', e.target.value)
    }
    const response = await fetch('http://localhost:5000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            Authorization: 'Bearer ',
        },
        body: JSON.stringify({entry: searchKeyWord}),
    });
    const searchFetch = await response.json()

    return {searchFetch};


}

export default function Search(data) {
    const [searchData, setSearchData] = useState(data);
    const [isDataLoaded,setDataLoaded] = useState(false)

    useEffect(async () => {
        if (!isDataLoaded) {
            if (localStorage.getItem('searchKeyWord')) {
                console.log("hello")
                const refreshedProps = await handleSearchChange(localStorage.getItem('searchKeyWord'),'old');
                setSearchData(refreshedProps.searchFetch);
            }
        }
        setDataLoaded(true)
    })
    async function refresh(e) {
        if(e.target.value.length == 0){
            localStorage.removeItem('searchKeyWord')
            setSearchData({})
        }else{
            const refreshedProps = await handleSearchChange(e,'new');
            setSearchData(refreshedProps.searchFetch);
            setDataLoaded(true)
        }
    }
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
                        <input
                            type={"text"}
                            id={"search"}
                            name={"search"}
                            placeholder={'Artists or Genres'}
                            onChange={refresh}
                        />
                    <Styles.searchIcon>
                        <FontAwesomeIcon icon={faSearch} />
                    </Styles.searchIcon>
                </Styles.searchBar>
            </Styles.barContainer>

            <Styles.resultContainer>
                <Styles.artistResults>
                    <h1>Artists</h1>
                {searchData.artists && searchData.artists.length ? searchData.artists.slice(0).map((artist, i) => {
                    return (
                            <Styles.searchItem key={artist.artist.id}>
                                <Link href="/artist/[slug]" as={`/artist/${artist.artist.url_slug}`}
                                      passHref>
                                    <a>
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
                                    </a>
                                </Link>
                            </Styles.searchItem>
                    )
                }) : <h4>No artists found.</h4>}
                </Styles.artistResults>

                <Styles.genreResults>
                    <h1>Genres</h1>
                {searchData.genres && searchData.genres.length? searchData.genres.slice(0).map((genre, i) => {
                    return (
                            <Styles.searchItem key={genre.genre.id}>
                                <img
                                    src={"/images/profile.jpeg"}
                                />
                                <div>
                                    <Link href="/genre/[slug]" as={`/genre/${genre.genre.slug}`}
                                          passHref>
                                        <a>
                                    <Styles.resultName>{genre.genre.name}</Styles.resultName>
                                        </a>
                                    </Link>
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

Search.getLayout = function getLayout(page) {
    return (
        <Default title={"Search"} pageType={"search"}>
            {page}
        </Default>
    )
}