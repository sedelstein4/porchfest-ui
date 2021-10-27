import React from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSortAmountDown} from "@fortawesome/free-solid-svg-icons";

function showSortPicker() {
    //TODO
    //https://flaviocopes.com/react-show-different-component-on-click/
}

export default function Header(props) {
    if (props.title === "Browse Artists"){ //only show sort icon on browse page
        return (
            <Styles.TopContainer>
                <Styles.header>
                    {props.title}
                </Styles.header>
                <Styles.IconBtn onClick={showSortPicker}>
                    <FontAwesomeIcon icon={faSortAmountDown}/>
                </Styles.IconBtn>
            </Styles.TopContainer>
        )
    }
    else {
        return (
            <Styles.TopContainer>
                <Styles.header>
                    {props.title}
                </Styles.header>
            </Styles.TopContainer>
        )
    }
}