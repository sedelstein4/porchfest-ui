import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faHeart, faSortAmountDown} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import {useRouter} from "next/router";

export default function Header(props) {

    const router = useRouter()
    const [heartOutline, heartFilled] = useState(false);
    const [noDropdown, dropdown] = useState(0);

    useEffect(() => {}, [noDropdown]);

    function sortHandler(){
        dropdown(current => !current)
    }

    function handleLikeClick(){
        heartFilled(!heartOutline);
    }

    return (
            <Styles.TopContainer>
                <Styles.BackBtn show={props.pageType === "artist"} onClick={() => router.back()}>
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
                            <div onClick={() => getStaticProps("alphabetical")}>
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

                            <div>
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
    console.log(artistData)

    return {
        props: {
            artistData
        }
    }
}