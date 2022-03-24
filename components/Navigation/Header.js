import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faHeart, faSortAmountDown} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import Router, {useRouter} from "next/router";
export default function Header(props) {
    const router = useRouter()
    const [heartOutline, heartFilled] = useState();
    const [noDropdown, dropdown] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if(!dataLoaded && props.slug != undefined){
            getArtistWithUser(props.slug,token).then((res)=>{
                heartFilled(res)
            })
            setDataLoaded(true)
        }

    }, [noDropdown]);

    function sortHandler(){
        dropdown(current => !current)
    }

    function handleLikeClick(){
        updatedLikedArtists(props.artistID).then((info) =>{
            heartFilled(info)
        })
    }


    function handleSortClick(param){
        localStorage.setItem('sort_type',param)
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
                    <Styles.SortBtn onClick={() => sortHandler()}>
                        <FontAwesomeIcon icon={faSortAmountDown}/>
                        <Styles.SortDropdown show={noDropdown}>
                            <div onClick={() => handleSortClick("alphabetical")}>
                                <input
                                    type="radio"
                                    value="Alphabetical"
                                    name="alphabetical"
                                    id="alphabetical"
                                    // defaultChecked={this.context.selectedFilter === 'Local Artists Only'}
                                    // onClick={this.context.setFilter}
                                />
                                <Styles.ButtonLabel htmlFor="alphabetical">Alphabetical</Styles.ButtonLabel>
                            </div>

                            <div onClick={() => handleSortClick("genre")}>
                                <input
                                    type="radio"
                                    value="Genre"
                                    name="genre"
                                    id="genre"
                                    // defaultChecked={this.context.selectedFilter === 'Events Only'}
                                    // onClick={this.context.setFilter}
                                />
                                <Styles.ButtonLabel htmlFor="genres">Genres</Styles.ButtonLabel>
                            </div>
                        </Styles.SortDropdown>
                    </Styles.SortBtn>
                    : props.pageType === "artist" ?
                    <Styles.LikeBtn onClick={() => handleLikeClick()}>
                        {heartOutline ? <FontAwesomeIcon icon={faHeart} className="filled-heart"/> : <FontAwesomeIcon icon={farHeart}/>}
                    </Styles.LikeBtn>
                        : null}

            </Styles.TopContainer>
        )
}

export async function getStaticProps( type ) {
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


    return {
        props: {
            artistData
        }
    }
}

export async function updatedLikedArtists(artistID) {
    const token = localStorage.getItem('accessToken');

    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({
            "artist_id": artistID,
        })
    }

    const updateArtist =fetch(`http://localhost:5000/update_user_to_artist`, opts)
        .then(resp => {
            if (resp.status == 200) return resp;
            if(resp.status == 401 && localStorage.getItem('refreshToken')) {
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
                        console.log(res)
                        const data = await res.json()
                        console.log(data.access_token)
                        localStorage.setItem('accessToken',data.access_token)
                        Router.reload()
                    })
                    .catch(error => {
                        console.error(error);
                    })
            } else if(resp.status === 422){
                //Router.push('http://localhost:3000')
                console.log("Error 422")
                return resp
            }
            else{
                console.log('error')
            }
        })
        .then(async res => {
            if(res){
                const data = await res.json()
                return data
            }
        })
        .catch(error => {
            console.error(error)
        })
        return updateArtist;


}
async function getArtistWithUser(slug,token) {
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            "access_token": token,
        })
    }

    const res = await fetch(`http://localhost:5000/artist/${slug}`, opts)
    const data = await res.json()
    return data.liked

}