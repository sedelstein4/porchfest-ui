import React, { Component } from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSortAmountDown} from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
    return (
        <Styles.TopContainer>
            <Styles.header>
               {props.title}
            </Styles.header>
            <Styles.IconBtn>
                <FontAwesomeIcon icon={faSortAmountDown} />
            </Styles.IconBtn>
        </Styles.TopContainer>
    )
}