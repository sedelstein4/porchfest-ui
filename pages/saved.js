import Head from "next/head";
import Header, {updatedLikedArtists} from "../components/Navigation/Header";
import Default from "../layouts/default";
import * as Styles from "../components/Saved/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight, faHeart} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import Link from "next/link";

export default function Saved(data) {
    const [savedArtists, setSavedArtists] = useState("");


    useEffect(()=> {
        const token = localStorage.getItem('accessToken');
        const opts = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }

        if(savedArtists == "") {
            console.log(token)
            fetch('http://localhost:5000/get_saved_artists', opts)
                .then(resp => {
                    if (resp.status == 200) return resp.json();
                    else alert("There has been some error");
                })
                .then(data => {
                    setSavedArtists(data)
                })
                .catch(error => {
                    console.error("There was an error");
                })
        }
    })
    return (
        <div className="content">

            <Head>
                <title>Saved Artists</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Styles.artistResults>
                {savedArtists ? savedArtists.slice(0).map((artist, i) => {
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
                }) : <h4>No artists found.</h4>}
            </Styles.artistResults>

        </div>
    )}

Saved.getLayout = function getLayout(page) {
    return (
        <Default title={"Saved Artists"}>
            {page}
        </Default>
    )
}

function getProps() {
    const token = localStorage.getItem('accessToken');
    console.log(token)
    const opts = {
        headers: {
            Authorization: 'Bearer ' + token
        }
    }
    fetch('http://localhost:5000/get_saved_artists', opts)
        .then(resp => {
            if (resp.status == 200) return resp.json();
            else alert("There has been some error");
        })
        .then(data => {
            artistData = data;
        })
        .catch(error => {
            console.error("There was an error");
        })

        let artistData = ""

        return {
            props: {
                artistData
            }
        }

}
