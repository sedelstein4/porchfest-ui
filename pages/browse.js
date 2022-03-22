import Head from "next/head";
import * as Styles from "../components/Browse/styles";
import Link from "next/link";
import Default from "../layouts/default";
import React, {useCallback, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

async function fetchData(type) {
    const response = await fetch('http://localhost:5000/artists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            Authorization: 'Bearer ',
        },
        body: JSON.stringify({type: type}),
    });
    const artistData = await response.json()

    return { artistData };
}

export default function Browse(data) {
    const router = useRouter();
    const [
        artistData,
        setArtistData
    ] = useState(data.artistData);

    async function refresh(type) {
        const refreshedProps = await fetchData(type);
        setArtistData(refreshedProps.artistData);
    }

    useEffect(() => {
            if (Object.values(router.query)[0] === 'alphabetical') {
                refresh("alphabetical")
            } else if (Object.values(router.query)[0] === 'genre'){
                refresh("genre")
            }
            // else{
            //     refresh("genre")
            // }
    }, [router.asPath])

        if (!artistData[0].name) {
            return (
                <div className="content">
                    <Head>
                        <title>Browse Artists</title>
                        <link rel="icon" href="/favicon.ico"/>
                    </Head>
                    {artistData.slice(0).map((genres, i) => {
                        const genreData = Object.values(genres)[0]
                        if (genreData.length > 0) {
                            return (
                                <Styles.rowContainer key={i}>
                                    <Link href="/genre/[slug]" as={`/genre/${Object.values(genres)[1]}`}
                                          passHref>
                                        <a>
                                            <Styles.genreHeading>
                                                <Styles.genre>{Object.keys(genres)[0]}</Styles.genre>
                                                <Styles.arrowIcon>
                                                    <FontAwesomeIcon icon={faChevronRight}/>
                                                </Styles.arrowIcon>
                                            </Styles.genreHeading>
                                        </a>
                                    </Link>
                                    <Styles.row>
                                        {genreData.slice(0, 3).map((artist, i) => {
                                            return (
                                                <Styles.cardContainer key={artist.id}>
                                                    <Link href="/artist/[slug]" as={`/artist/${artist.url_slug}`}
                                                          passHref>
                                                        <a>
                                                            <img
                                                                src={artist.photo ? artist.photo : "/images/profile.jpeg"}
                                                                alt={artist.name}
                                                                width="100%"
                                                                height="100%"
                                                            />
                                                        </a>
                                                    </Link>
                                                    <Styles.name>
                                                        <Link href="/artist/[slug]" as={`/artist/${artist.url_slug}`}
                                                              passHref>
                                                            <a>
                                                                {artist.name}
                                                            </a>
                                                        </Link>
                                                    </Styles.name>
                                                </Styles.cardContainer>
                                            )
                                        })}
                                    </Styles.row>
                                </Styles.rowContainer>
                            )
                        }
                    })}
                </div>
            )
        } else {
            return (
                <div className="content">
                    <Head>
                        <title>Browse Artists</title>
                        <link rel="icon" href="/favicon.ico"/>
                    </Head>
                    {artistData.slice(0).map((artist, i) => {
                        return (
                            <Styles.resultContainer key={artist.id}>
                                <Link href="/artist/[slug]" as={`/artist/${artist.url_slug}`}
                                      passHref>
                                    <a>
                                <img
                                    src={artist.photo ? artist.photo : "/images/profile.jpeg"}
                                    alt={artist.name}
                                    width="100%"
                                    height="100%"
                                />
                                <div>
                                    <Styles.resultName>{artist.name}</Styles.resultName>
                                    <Styles.resultType>{artist.genre[0]}</Styles.resultType>
                                </div>
                                <Styles.resultIcon>
                                    <FontAwesomeIcon icon={faAngleRight}/>
                                </Styles.resultIcon>
                                    </a>
                                </Link>
                            </Styles.resultContainer>
                        )
                    })
                    }
                </div>
            )
        }
}


export async function getStaticProps( context ) {
    console.log(context.query)
    const artistRes = await fetch('http://localhost:5000/artists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            Authorization: 'Bearer ',
        },
        body: JSON.stringify({type: 'genre'}),
    });
    const artistData = await artistRes.json();

    return {
        props: {
            artistData
        }
    }
}

Browse.getLayout = function getLayout(page) {
    return (
        <Default title={"Browse Artists"} pageType={"browse"}>
            {page}
        </Default>
    )
}
