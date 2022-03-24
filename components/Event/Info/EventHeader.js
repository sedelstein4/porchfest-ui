import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";

export default function EventHeader(props) {
    const [loggedInUser, setLoggedInUser] = useState(false)
    useEffect(()=>{
        if(localStorage.getItem('accessToken')){
            setLoggedInUser(true)
        }
    })
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
                {loggedInUser ? (
                <Link href={"/profile"} passHref>
                    <FontAwesomeIcon icon={faUserAlt} />
                </Link>
                ):(
                <Link href={"/"} passHref>
                    <FontAwesomeIcon icon={faUserAlt} />
                </Link>
                )}
            </Styles.profileBtn>

        </Styles.TopContainer>
    )
}