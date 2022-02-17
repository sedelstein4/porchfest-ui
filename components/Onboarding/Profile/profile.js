import React from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {useRouter} from "next/router";


export default function Profile(props) {
    const router = useRouter()

    return (
        <Styles.container>
            <Styles.header>
                {/*<Link href={"/info"} passHref>*/}
                    <Styles.backBtn onClick={() => router.back()}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </Styles.backBtn>
                {/*</Link>*/}
                <Styles.title>User Profile</Styles.title>
            </Styles.header>
            <Styles.infoRow>
                <Styles.infoType>Email</Styles.infoType>
                <Styles.infoValue>person@ithaca.edu</Styles.infoValue>

            </Styles.infoRow>
            <Styles.buttonDiv>
                <Link href={"/"} passHref>
                    <Styles.signout>SIGN OUT</Styles.signout>
                </Link>
            </Styles.buttonDiv>
        </Styles.container>
    )

}