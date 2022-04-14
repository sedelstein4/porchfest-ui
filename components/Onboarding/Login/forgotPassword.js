import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Router from 'next/router'
import {backendEndpoint} from "../../../Config";
import RegisterAPI from "../../../api/RegisterAPI";

export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const [confirmEmail, setconfirmEmail] = useState("")
    const [loginError,setLoginError] = useState("")
    const [emailSent,setEmailSent] = useState()

    const handleSubmit = () => {
        const emailMatcher = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(email != confirmEmail || !email.toLowerCase().match(emailMatcher)){
            setLoginError("Email mismatch")
        }
        if(email == confirmEmail && email.toLowerCase().match(emailMatcher)) {
            RegisterAPI.sendPasswordReset(email).then((resp) =>{
                if (resp === '200') {
                    setEmailSent("If email is found you will receive an email to reset password")
                    //Router.push('http://localhost:3000/login')
                }else {
                    setEmailSent("Something went wrong")
                }
            })
        }
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
                    type={"text"}
                    id={"email"}
                    name={"email"}
                    placeholder={"RE-ENTER EMAIL"}
                    value={confirmEmail}
                    onChange={(e) => setconfirmEmail(e.target.value)}
                />
                </Styles.inputFields>
                {loginError && loginError !="" ? <Styles.loginNotice>{loginError}</Styles.loginNotice> : <Styles.loginNotice>{emailSent}</Styles.loginNotice>}
                <Styles.signUpBtn onClick={handleSubmit}>Reset Password</Styles.signUpBtn>

            </Styles.container>
        </div>
    )

}

