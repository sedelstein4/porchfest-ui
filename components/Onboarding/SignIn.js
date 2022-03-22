import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {container} from "./styles";
import Router from 'next/router'

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("")
    const [loginError,setLoginError] = useState("")


    useEffect(()=> {
        const data = localStorage.getItem('accessToken');
        if(data){
            setToken(data)
        }
    })
    const fetchData = async () => {
        const req = await fetch('https://randomuser.me/api/?gender=male&results=100');
        const newData = await req.json();

        return setData(newData.results);
    };

    const handleSubmit = () => {
        const opts = {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        }
        fetch('http://localhost:5000/login', opts)
            .then(resp => {
                if (resp.status == 201)
                    return resp;
                else setLoginError('Password or email incorrect')
            })
            .then(async data => {
                if(data){
                    const tokens = await data.json()
                    localStorage.setItem('accessToken',tokens.access_token)
                    localStorage.setItem('refreshToken', tokens.refresh_token)
                    await Router.push('http://localhost:3000/info')
                }

            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>
            <Link href={"/"} passHref>
                <Styles.backBtn>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Styles.backBtn>
            </Link>
            <Styles.container id={"Signin"}>
                <Styles.title>Porchfest</Styles.title>

                    <input
                    type={"text"}
                    id={"email"}
                    name={"email"}
                    placeholder={"EMAIL"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                    type={"password"}
                    id={"pass"}
                    name={"pass"}
                    placeholder={"PASSWORD"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Styles.forgotLink>Forgot password?</Styles.forgotLink>
                    {loginError && loginError !="" ? loginError : ""}
                    <button onClick={handleSubmit}>SIGN IN</button>

            </Styles.container>
        </div>
    )

}

