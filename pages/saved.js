import Head from "next/head";
import Header, {updatedLikedArtists} from "../components/Navigation/Header";
import Default from "../layouts/default";
import * as Styles from "../components/Saved/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faHeart} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Router from "next/router";

export default function Saved(data) {
    const [savedArtists, setSavedArtists] = useState("");
    const [isDataLoaded, setDataLoaded] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(false)

    useEffect(()=> {
        if(!isDataLoaded && localStorage.getItem('accessToken')) {
            const token = localStorage.getItem('accessToken');
            const opts = {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
            fetch('http://localhost:5000/get_user_saved_artists', opts)
                .then(resp => {
                    if (resp.status == 200) return resp.json();
                    if(resp.status === 401 && localStorage.getItem('refreshToken')) {
                        const opts = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                Accept: 'application/json',
                                Authorization: 'Bearer ' + localStorage.getItem('refreshToken')
                            }
                        }
                        fetch(`http://localhost:5000/refresh`, opts)
                            .then(async res => {
                                const data = await res.json()
                                localStorage.setItem('accessToken',data.access_token)
                                Router.reload()
                            })
                            .catch(error => {
                                console.error(error);
                            })
                    }
                    else Router.push('http://localhost:3000/browse')
                })
                .then(data => {
                    setSavedArtists(data)
                })
                .catch(error => {
                    console.error(error);
                })
            setDataLoaded(true)
            setLoggedInUser(true)
        }
    })
    return (
        <div className="content">
            <Head>
                <title>Saved Artists</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {loggedInUser && isDataLoaded ? (
            <Styles.artistResults>
                {savedArtists.length > 0 && isDataLoaded ? savedArtists.slice(0).map((artist, i) => {
                    return (
                        <Styles.searchItem key={artist.id}>
                            <Styles.LikeBtn>
                               <FontAwesomeIcon icon={faHeart} className="filled-heart"/>
                            </Styles.LikeBtn>
                            <img
                                src={artist.photo}
                            />
                            <div>
                                <Link href="/artist/[slug]" as={`/artist/${artist.url_slug}`}
                                      passHref>
                                    <a>
                                <Styles.resultName>{artist.name}</Styles.resultName>
                                    </a>
                                </Link>
                            </div>
                            <Styles.resultIcon>
                                <FontAwesomeIcon icon={faAngleRight}/>
                            </Styles.resultIcon>
                        </Styles.searchItem>
                    )
                }) :
                    <h4>No artists found.</h4>}

            </Styles.artistResults>
                ):(
                <h4>Need to be logged in to use this feature</h4>
            )}

        </div>
    )}

Saved.getLayout = function getLayout(page) {
    return (
        <Default title={"Saved Artists"}>
            {page}
        </Default>
    )
}

