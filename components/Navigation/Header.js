import React from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faSortAmountDown} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";

function showSortPicker() {
    //TODO
    //https://flaviocopes.com/react-show-different-component-on-click/
}

export default function Header(props) {
    const router = useRouter()
        return (
            <Styles.TopContainer>
                <Styles.BackBtn show={props.pageType === "artist"} onClick={() => router.back()}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Styles.BackBtn>
                <Styles.PageTitle>
                    {props.title}
                </Styles.PageTitle>
                <Styles.IconBtn show={props.pageType === "browse"} onClick={showSortPicker}>
                    <FontAwesomeIcon icon={faSortAmountDown}/>
                </Styles.IconBtn>
            </Styles.TopContainer>
        )
}