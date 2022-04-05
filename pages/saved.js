import Head from "next/head";
import Header, {updatedLikedArtists} from "../components/Navigation/Header";
import Default from "../layouts/default";
import * as Styles from "../components/Saved/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faHeart} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import Router from "next/router";
import {backendEndpoint, frontendEndpoint} from "../Config";
import UserAPI from "./UserAPI";

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
            fetch(backendEndpoint + 'get_user_saved_artists', opts)
                .then(resp => {
                    if (resp.status == 200) return resp.json();

                    if(resp.status === 401 && localStorage.getItem('refreshToken')) {
                        UserAPI.getNewToken(localStorage.getItem('refreshToken')).then((resp) => {
                            const data = resp
                            localStorage.setItem('accessToken',data.access_token)
                            Router.reload()
                        })
                    }
                    else Router.push(frontendEndpoint + 'browse')
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
                <Styles.homeContainer>
                    <h4>Need to be logged in to use this feature</h4>
                    <Link href={"/"} passHref>
                        <Styles.btn>Login/Sign up</Styles.btn>
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

