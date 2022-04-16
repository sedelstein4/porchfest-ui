import React, { Component } from 'react'
import * as Styles from './styles'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faInfoCircle, faMusic, faMap} from "@fortawesome/free-solid-svg-icons";
import {faItunesNote} from "@fortawesome/free-brands-svg-icons";
import {useRouter} from "next/router";

export default function Navigation({ children, home }) {

    const router = useRouter();

    return (
        <Styles.NavContainer>
            <Link href={"/browse"} passHref>
                <Styles.NavLink className={router.pathname === "/browse" ? "active" : ""}>
                    <FontAwesomeIcon icon={faMusic} />
                    Browse
                </Styles.NavLink>
            </Link>
            <Link href={"/map"} passHref>
                <Styles.NavLink className={router.pathname === "/map" ? "active" : ""}>
                    <FontAwesomeIcon icon={faMap} />
                    Map
                </Styles.NavLink>
            </Link>
            <Link href={"/saved"} passHref>
                <Styles.NavLink className={router.pathname === "/saved" ? "active" : ""}>
                    <FontAwesomeIcon icon={faHeart} />
                    Saved
                </Styles.NavLink>
            </Link>
            <Link href={"/info"} passHref>
                <Styles.NavLink className={router.pathname === "/info" ? "active" : ""}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Event
                </Styles.NavLink>
            </Link>
        </Styles.NavContainer>
    )
        }