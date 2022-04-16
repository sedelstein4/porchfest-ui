import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faHeart, faMapMarked, faSortAmountDown} from "@fortawesome/free-solid-svg-icons";
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'
import Router, {useRouter} from "next/router";
import UserAPI from "../../api/UserAPI";
import ArtistAPI from "../../api/ArtistAPI";

export default function Header(props) {
    const router = useRouter()
    const [heartOutline, heartFilled] = useState();
    const [noDropdown, dropdown] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(false)
    const [sort_type, setSortType] = useState("")
    useEffect(async () => {
        if (localStorage.getItem('sort_type')) {
            setSortType(localStorage.getItem('sort_type'))
        }
        if (localStorage.getItem('accessToken')) {
            const token = localStorage.getItem('accessToken');
            if (!dataLoaded && props.slug !== undefined) {
                ArtistAPI.getArtistLikedToUser(props.slug,token).then(async (resp) => {
                    heartFilled(resp.liked)

                })
                setDataLoaded(true)
                setLoggedInUser(true)
            }
        }
    }, [noDropdown]);

    function sortHandler(){
        dropdown(current => !current)
    }

    function handleLikeClick() {
        const token = localStorage.getItem('accessToken');
        UserAPI.updateUserToArtist(props.artistID, token).then((resp) => {
            if(resp === '401' && localStorage.getItem('refreshToken')) {
                UserAPI.getNewToken(localStorage.getItem('refreshToken')).then((resp) => {
                    localStorage.setItem('accessToken',resp.access_token)
                    Router.reload()
                })
            }
            heartFilled(resp)
        })
    }

    function handleSortClick(param){
        localStorage.setItem('sort_type',param)
        setSortType(param)
        router.push(
            {
                query: {
                    param
                }
            },
            `/browse/?q=${param}`,
            {shallow: false}
        );
    }

    function filterHandler(){
        //TODO
    }

    return (
            <Styles.TopContainer>
                <Styles.BackBtn show={props.pageType === "artist" || props.pageType === "genre"} onClick={() => router.back()}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Styles.BackBtn>
                <Styles.PageInfo>
                    <Styles.PageTitle>
                        {props.title}
                    </Styles.PageTitle>
                    {props.pageType === "artist" ? <Styles.Hometown>{props.hometown}</Styles.Hometown> : null}
                </Styles.PageInfo>
                {props.pageType === "browse" ?
                    <>
                    <Styles.SortBtn onClick={() => sortHandler()}>
                        <FontAwesomeIcon icon={faSortAmountDown}/>
                       </Styles.SortBtn>
                        <Styles.SortDropdown show={noDropdown}>
                            <div onClick={() => handleSortClick("alphabetical")}>
                                <input
                                    type="radio"
                                    value="Alphabetical"
                                    name="sort"
                                    id="alphabetical"
                                    onClick={() => sortHandler()}
                                    defaultChecked={sort_type === "alphabetical"}
                                />
                                <Styles.ButtonLabel htmlFor="alphabetical">Alphabetical</Styles.ButtonLabel>
                            </div>
                            <div onClick={() => handleSortClick("genre")}>
                                <input
                                    type="radio"
                                    value="Genre"
                                    name="sort"
                                    id="genre"
                                    onClick={() => sortHandler()}
                                    defaultChecked={sort_type === "genre"}
                                />
                                <Styles.ButtonLabel htmlFor="genre">Genres</Styles.ButtonLabel>
                            </div>
                        </Styles.SortDropdown>
                    </>
                    : props.pageType === "artist" && loggedInUser ?
                    <Styles.LikeBtn onClick={() => handleLikeClick()}>
                        {heartOutline ? <FontAwesomeIcon icon={faHeart} className="filled-heart"/> : <FontAwesomeIcon icon={farHeart}/>}
                    </Styles.LikeBtn> : props.pageType === "map" ?
                            <Styles.SortBtn onClick={() => filterHandler()}>
                                <FontAwesomeIcon icon={faMapMarked}/>
                            </Styles.SortBtn>
                        : null}
            </Styles.TopContainer>
        )
}

export async function getStaticProps( type ) {
    ArtistAPI.getArtists(type).then((artistData) => {
        return {
            props:{
                artistData
            }
        }
    })
}

export function updatedLikedArtists(artistID) {

}