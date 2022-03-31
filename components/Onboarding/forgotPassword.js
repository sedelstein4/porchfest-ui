import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {container} from "./styles";
import Router from 'next/router'

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
            const opts = {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": email,
                })
            }
            fetch('http://localhost:5000/send_password_reset', opts)
                .then(resp => {
                    if (resp.status == 200) {
                        setEmailSent("If email is found you will receive an email to reset password")
                        return resp;
                    }else {
                        setEmailSent("Something went wrong")
                    }
                })
                .then(data => {

                    //Router.push('http://localhost:3000/login')
                })
                .catch(error => {
                    console.error(error);
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
                    placeholder={"EMAIL  AGAIN"}
                    value={confirmEmail}
                    onChange={(e) => setconfirmEmail(e.target.value)}
                />
                {loginError && loginError !="" ? <Styles.loginNotice>{loginError}</Styles.loginNotice> : <Styles.loginNotice>{emailSent}</Styles.loginNotice>}
                <Styles.signInBtn onClick={handleSubmit}>Reset Password</Styles.signInBtn>

            </Styles.container>
        </div>
    )

}

