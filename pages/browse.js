import Head from "next/head";
import * as Styles from "../components/Browse/styles";
import Link from "next/link";
import Default from "../layouts/default";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

export default function Browse(data) {
    // const genreData = Object.values(genres)[0]
    // console.log(Object.keys(data.artistData[0])[0])
    if (!data.artistData[0].name) {
        return (
            <div className="content">
                <Head>
                    <title>Browse Artists</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                {data.artistData.slice(0).map((genres, i) => {
                    const genreData = Object.values(genres)[0]
                    return (
                        <Styles.rowContainer key={data.artistData.id}>
                            <Styles.genre>
                                {Object.keys(genres)[0]}
                            </Styles.genre>
                            <Styles.row>
                                {genreData.slice(0, 3).map((artist, i) => {
                                    return (
                                        <Styles.cardContainer key={artist.id}>
                                            <Link href="/artist/[slug]" as={`/artist/${artist.url_slug}`} passHref>
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
                                                <Link href="/artist/[slug]" as={`/artist/${artist.url_slug}`} passHref>
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
                {data.artistData.slice(0).map((artist, i) => {
                    return (
                        <Styles.resultContainer key={artist.id}>
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
                        </Styles.resultContainer>
                    )
                })
                }
            </div>
        )
    }
}

export async function getStaticProps( context ) {
    const type = "genres"
    const artistRes = await fetch('http://localhost:5000/artists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            Authorization: 'Bearer ',
        },
        body: JSON.stringify({type: type}),
    });
    const artistData = await artistRes.json();
    console.log(artistData)

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
