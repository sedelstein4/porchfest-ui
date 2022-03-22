import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Router, {useRouter} from "next/router";


export default function Profile(props) {
    const router = useRouter()
    const [email, setEmail] = useState("");

    useEffect(()=> {
        const data = localStorage.getItem('accessToken');
        if(data){
            const opts = {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Content-Type": "application/json",
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + data
                }
            }
            fetch('http://localhost:5000/user_profile', opts)
                .then(resp => {
                    if (resp.status == 200)
                        return resp;
                    else console.log("Error")
                })
                .then(async data => {
                    if(data){
                        const userData = await data.json()
                        setEmail(userData.email)
                    }
                })
                .catch(error => {
                    console.error(error);
                })
        }
    })
    const removeTokens = () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
    }

    return (
        <Styles.container>
            <Styles.header>
                <Link href={"/info"} passHref>
                    <Styles.backBtn onClick={() => router.back()}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </Styles.backBtn>
                </Link>
                <Styles.title>User Profile</Styles.title>
            </Styles.header>
            <Styles.infoRow>
                <Styles.infoType>Email</Styles.infoType>
                <Styles.infoValue>{email}</Styles.infoValue>

            </Styles.infoRow>
            <Styles.buttonDiv onClick={removeTokens}>
                <Link href={"/"} passHref>
                    <Styles.signout>SIGN OUT</Styles.signout>
                </Link>
            </Styles.buttonDiv>
        </Styles.container>
    )

}