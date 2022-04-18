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
    const [emailSent,setEmailSent] = useState()

    const handleSubmit = () => {
        const emailMatcher = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


        if(email.toLowerCase().match(emailMatcher)) {
            RegisterAPI.sendPasswordReset(email).then((resp) =>{
                if (resp === '404') {
                    setEmailSent("Email not found")
                }
                else if (resp === '200') {
                    setEmailSent("Email found and sent")
                    //Router.push('http://localhost:3000/login')
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
                    placeholder={"EMAIL:"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                </Styles.inputFields>
                <Styles.loginNotice>{emailSent}</Styles.loginNotice>
                <Styles.signUpBtn onClick={handleSubmit}>Reset Password</Styles.signUpBtn>

            </Styles.container>
        </div>
    )

}

