import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import Link from 'next/link'
import Router from "next/router";

export default function Home(props) {
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
            fetch(`http://localhost:5000/user_profile`, opts)
                .then(async resp => {
                    if (resp.status == 200) {
                        Router.push('http://localhost:3000/info')
                    }//If any other response loads the page ei: no token
                })

                .catch(error => {
                    console.error(error);
                })
        }

    })

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
            <Link href={"/browse"} passHref>
                <Styles.btn>CONTINUE AS GUEST</Styles.btn>
            </Link>
        </Styles.homeContainer>



    )
}