import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faHeart, faMapMarked, faSearch, faSortAmountDown} from "@fortawesome/free-solid-svg-icons";
import {faHeart as farHeart} from '@fortawesome/free-regular-svg-icons'
import Router, {useRouter} from "next/router";
import UserAPI from "../../api/UserAPI";
import ArtistAPI from "../../api/ArtistAPI";
import Link from "next/link";

export default function Header(props) {
    const router = useRouter()
    const [heartOutline, heartFilled] = useState();
    const [noDropdown, dropdown] = useState(false);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(false)
    const [sort_type, setSortType] = useState("")
    const [filter_type, setFilterType] = useState("")
    useEffect(async () => {
        if (localStorage.getItem('sort_type')) {
            setSortType(localStorage.getItem('sort_type'))
        }
        if (localStorage.getItem('filter_type')){
            setFilterType(localStorage.getItem('filter_type'))
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

    function dropdownHandler(){
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

    function handleMapFilterClick(param){
        localStorage.setItem('filter_type', param)
        setSortType(param)
        router.push(
            {
                query: {
                    param
                }
            },
            `/map/?q=${param}`,
            {shallow: false}
        )
    }

    return (
            <Styles.TopContainer>
                <Styles.BackBtn show={props.pageType === "artist" || props.pageType === "genre" || props.pageType === "search"} onClick={() => router.back()}>
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
                        <Link href="/search" passHref>
                            <Styles.SortBtn>
                                <FontAwesomeIcon icon={faSearch} />
                            </Styles.SortBtn>
                        </Link>
                    <Styles.SortBtn onClick={() => dropdownHandler()} style={{marginLeft:"15px"}}>
                        <FontAwesomeIcon icon={faSortAmountDown}/>
                       </Styles.SortBtn>
                        <Styles.SortDropdown show={noDropdown}>
                            <div onClick={() => handleSortClick("alphabetical")}>
                                <input
                                    type="radio"
                                    value="Alphabetical"
                                    name="sort"
                                    id="alphabetical"
                                    onClick={() => dropdownHandler()}
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
                                    onClick={() => dropdownHandler()}
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
                            <>
                                <Styles.SortBtn onClick={() => dropdownHandler()}>
                                    <FontAwesomeIcon icon={faMapMarked}/>
                                </Styles.SortBtn>
                                <Styles.SortDropdown show={noDropdown}>
                                    <div onClick={() => handleMapFilterClick("all")}>
                                        <input
                                            type="radio"
                                            value="All"
                                            name="filter"
                                            id="all"
                                            onClick={() => dropdownHandler()}
                                            defaultChecked={filter_type === "all"}
                                        />
                                        <Styles.ButtonLabel htmlFor="all">All</Styles.ButtonLabel>
                                    </div>
                                    <div onClick={() => handleMapFilterClick("saved")}>
                                        <input
                                            type="radio"
                                            value="Saved"
                                            name="filter"
                                            id="saved"
                                            onClick={() => dropdownHandler()}
                                            defaultChecked={filter_type === "saved"}
                                        />
                                        <Styles.ButtonLabel htmlFor="saved">Saved</Styles.ButtonLabel>
                                    </div>
                                    <div onClick={() => handleMapFilterClick("11am - 12pm")}>
                                        <input
                                            type="radio"
                                            value="11am - 12pm"
                                            name="filter"
                                            id="11am - 12pm"
                                            onClick={() => dropdownHandler()}
                                            defaultChecked={filter_type === "11am - 12pm"}
                                        />
                                        <Styles.ButtonLabel htmlFor="11am - 12pm">11am-12pm</Styles.ButtonLabel>
                                    </div>
                                    <div onClick={() => handleMapFilterClick("12pm - 1pm")}>
                                        <input
                                            type="radio"
                                            value="12pm - 1pm"
                                            name="filter"
                                            id="12pm - 1pm"
                                            onClick={() => dropdownHandler()}
                                            defaultChecked={filter_type === "12pm - 1pm"}
                                        />
                                        <Styles.ButtonLabel htmlFor="12pm - 1pm">12pm-1pm</Styles.ButtonLabel>
                                    </div>
                                    <div onClick={() => handleMapFilterClick("1pm - 2pm")}>
                                        <input
                                            type="radio"
                                            value="1pm - 2pm"
                                            name="filter"
                                            id="1pm - 2pm"
                                            onClick={() => dropdownHandler()}
                                            defaultChecked={filter_type === "1pm - 2pm"}
                                        />
                                        <Styles.ButtonLabel htmlFor="1pm - 2pm">1pm-2pm</Styles.ButtonLabel>
                                    </div>
                                    <div onClick={() => handleMapFilterClick("2pm - 3pm")}>
                                        <input
                                            type="radio"
                                            value="2pm - 3pm"
                                            name="filter"
                                            id="2pm - 3pm"
                                            onClick={() => dropdownHandler()}
                                            defaultChecked={filter_type === "2pm - 3pm"}
                                        />
                                        <Styles.ButtonLabel htmlFor="2pm - 3pm">2pm-3pm</Styles.ButtonLabel>
                                    </div>
                                    <div onClick={() => handleMapFilterClick("3pm - 4pm")}>
                                        <input
                                            type="radio"
                                            value="3pm - 4pm"
                                            name="filter"
                                            id="3pm - 4pm"
                                            onClick={() => dropdownHandler()}
                                            defaultChecked={filter_type === "3pm - 4pm"}
                                        />
                                        <Styles.ButtonLabel htmlFor="3pm - 4pm">3pm-4pm</Styles.ButtonLabel>
                                    </div>
                                    <div onClick={() => handleMapFilterClick("4pm - 5pm")}>
                                        <input
                                            type="radio"
                                            value="4pm - 5pm"
                                            name="filter"
                                            id="4pm - 5pm"
                                            onClick={() => dropdownHandler()}
                                            defaultChecked={filter_type === "4pm - 5pm"}
                                        />
                                        <Styles.ButtonLabel htmlFor="4pm - 5pm">4pm-5pm</Styles.ButtonLabel>
                                    </div>
                                </Styles.SortDropdown>
                            </>
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