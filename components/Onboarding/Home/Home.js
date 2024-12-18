import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import Link from 'next/link'
import Router from "next/router";
import {frontendEndpoint} from "../../../Config";
import UserAPI from "../../../api/UserAPI";

export default function Home(props) {
    // Redirects so that the user doesn't have to login again
    useEffect(()=> {
        const token = localStorage.getItem('accessToken');
        if(token){
            UserAPI.getUserProfile(token).then((resp) => {
                if (resp.email) {
                    Router.push(frontendEndpoint + 'info')
                }
                else{ //If any other response loads the page ei: no token
                    localStorage.clear()
                }
            })
        }

    })

    function handleGuestClick(){
        localStorage.clear()
        Router.push(frontendEndpoint + 'info')
    }

    return (
        <Styles.homeContainer>
            <Styles.title>Porchfest</Styles.title>
            <Link href={"/login"} passHref>
                <Styles.btn>SIGN IN</Styles.btn>
            </Link>
            <br/>
            <Link href={"/register"} passHref>
                <Styles.btn>SIGN UP</Styles.btn>
            </Link>
            <br/>
            <Styles.btnGuest onClick={() => handleGuestClick()}>
                CONTINUE AS GUEST
            </Styles.btnGuest>

        </Styles.homeContainer>
    )
}