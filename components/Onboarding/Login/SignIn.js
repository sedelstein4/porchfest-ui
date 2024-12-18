import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Router from 'next/router'
import {backendEndpoint, frontendEndpoint} from "../../../Config";
import RegisterAPI from "../../../api/RegisterAPI";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
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
    const showPasswordSubmit = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = () => {
        RegisterAPI.login(email,password).then((resp) => {
            if(resp === '401'){
                setLoginError('Password or email incorrect')
            }
            else{
                const tokens = resp
                localStorage.setItem('accessToken',tokens.access_token)
                localStorage.setItem('refreshToken', tokens.refresh_token)
                Router.push(frontendEndpoint + 'info')
            }
        })
    }


    return (
        <div className="mobile-margin-sides">
            <Link href={"/"} passHref>
                <Styles.backBtn>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Styles.backBtn>
            </Link>
            <Styles.container id={"Signin"}>
                <Styles.title>Porchfest</Styles.title>

                <Styles.inputFields>
                    <input
                    type={"text"}
                    id={"email"}
                    name={"email"}
                    placeholder={"EMAIL"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type={showPassword?'text':'password'}
                    id={"pass"}
                    name={"pass"}
                    placeholder={"PASSWORD"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link href={"/forgotPassword"} passHref>
                        <Styles.forgotLink>Forgot password?</Styles.forgotLink>
                    </Link>
                    <Styles.showPassword onClick={showPasswordSubmit}>{showPassword?'Hide password':'Show password'}</Styles.showPassword>
                </Styles.inputFields>
                {loginError && loginError !="" ? <Styles.loginError>{loginError}</Styles.loginError> : ""}
                    <Styles.signInBtn onClick={handleSubmit}>SIGN IN</Styles.signInBtn>

            </Styles.container>
        </div>
    )

}

