import React from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
    return (
        <Styles.searchContainer>
            <form>
                <input type={"text"} id={"search"} name={"search>"} placeholder={"Artists or Genres"}/>
            </form>
            <Styles.icon>
                <FontAwesomeIcon icon={faSearch} />
            </Styles.icon>
        </Styles.searchContainer>
    )
}
