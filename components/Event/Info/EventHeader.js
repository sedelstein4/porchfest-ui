import React from 'react'
import * as localStyles from './styles'
import * as mainStyles from "../../Navigation/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";

export default function EventHeader(props) {
    return (
        <mainStyles.TopContainer>
            <div>
                <localStyles.header>
                    {props.title}
                </localStyles.header>
                <localStyles.city>
                    {props.city}
                </localStyles.city>
            </div>
            <mainStyles.SortBtn>
                <FontAwesomeIcon icon={faUserAlt} />
            </mainStyles.SortBtn>

        </mainStyles.TopContainer>
    )
}