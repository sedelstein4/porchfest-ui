import Head from "next/head";
import Default from "../layouts/default";
import * as Styles from "../components/Saved/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faHeart} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Router from "next/router";
import UserAPI from "../api/UserAPI";

export default function Saved(data) {
    const [savedArtists, setSavedArtists] = useState("");
    const [isDataLoaded, setDataLoaded] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(false)

    useEffect(()=> {
        if(!isDataLoaded && localStorage.getItem('accessToken')) {
            const token = localStorage.getItem('accessToken');
            UserAPI.getUserSavedArtists(token).then((resp) => {
                if(resp  === '401' && localStorage.getItem('refreshToken')) {
                    UserAPI.getNewToken(localStorage.getItem('refreshToken')).then((resp) => {
                        const data = resp
                        localStorage.setItem('accessToken',data.access_token)
                        Router.reload()
                    })
                }else{
                    setSavedArtists(resp)
                }
            })
            setDataLoaded(true)
            setLoggedInUser(true)
        }
    })
    function handleLikeClick(artistID) {
        const token = localStorage.getItem('accessToken');
        UserAPI.updateUserToArtist(artistID, token).then((resp) => {
            if(resp === '401' && localStorage.getItem('refreshToken')) {
                UserAPI.getNewToken(localStorage.getItem('refreshToken')).then((resp) => {
                    const data = resp
                    localStorage.setItem('accessToken',data.access_token)
                    Router.reload()
                })
            }
            setDataLoaded(false)
        })
    }
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
                            <Styles.LikeBtn onClick={() => handleLikeClick(artist.id)}>
                               <FontAwesomeIcon icon={faHeart} className="filled-heart"/>
                            </Styles.LikeBtn>
                            <Link href="/artist/[slug]" as={`/artist/${artist.url_slug}`} passHref>
                                <a>
                                    <img
                                        src={artist.photo ? artist.photo : "/images/music_note.png"}
                                    />
                                    <Styles.resultName>{artist.name}</Styles.resultName>
                                    <Styles.resultIcon>
                                        <FontAwesomeIcon icon={faAngleRight}/>
                                    </Styles.resultIcon>
                                </a>
                            </Link>
                        </Styles.searchItem>
                    )
                }) :
                    <h4>No artists found.</h4>}

            </Styles.artistResults>
                ):(
                <Styles.homeContainer>
                    <h4>Create an account to use this feature!</h4>
                    <Link href={"/"} passHref>
                        <Styles.btn>Sign in / Sign up</Styles.btn>
                    </Link>
                </Styles.homeContainer>


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

