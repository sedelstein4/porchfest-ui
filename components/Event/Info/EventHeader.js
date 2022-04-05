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
                {loggedInUser ? (
                <Link href={"/profile"} passHref>
                    <Styles.profileBtn>
                    <FontAwesomeIcon icon={faUserAlt}/>
                    </Styles.profileBtn>
                </Link>
                ):(
                <Link href={"/"} passHref>
                    <Styles.profileBtn>
                    <FontAwesomeIcon icon={faUserAlt}/>
                    </Styles.profileBtn>
                </Link>
                )}


        </Styles.TopContainer>
    )
}