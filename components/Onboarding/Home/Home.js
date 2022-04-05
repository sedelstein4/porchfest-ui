import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import Link from 'next/link'
import Router from "next/router";
import {backendEndpoint, frontendEndpoint} from "../../../Config";

export default function Home(props) {
    // Redirects so that the user doesn't have to login again
    useEffect(()=> {
        const token = localStorage.getItem('accessToken');
        if(token){
            const opts = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token
                }
            }
            fetch(backendEndpoint + `user_profile`, opts)
                .then(async resp => {
                    if (resp.status == 200) {
                        Router.push(frontendEndpoint + 'info')
                    }//If any other response loads the page ei: no token
                })

                .catch(error => {
                    console.error(error);
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