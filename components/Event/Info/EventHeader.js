import React from 'react'
import * as Styles from './styles'
//import * as mainStyles from "../../Navigation/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";

export default function EventHeader(props) {
    return (
        <Styles.TopContainer>
            <div>
                <Styles.header>
                    {props.title}
                </Styles.header>
                <Styles.city>
                    {props.city}
                </Styles.city>
            </div>
            <Styles.profileBtn>
                <FontAwesomeIcon icon={faUserAlt} />
            </Styles.profileBtn>

        </Styles.TopContainer>
    )
}