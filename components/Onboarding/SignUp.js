import React, {useState} from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import Router, {useRouter} from "next/router";


export default function SignUp(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconFirmPassword] = useState("")
    const [loginError,setLoginError] = useState("")
    const router = useRouter();

    const handleSubmit = () => {
        const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        const emailMatcher = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(password != confirmPassword || !email.toLowerCase().match(emailMatcher)){
            setLoginError("Password mismatch")
        }
        if(!re.test(password)){
            setLoginError("Password needs to be min 8 letter password, with at least a symbol, upper and lower case letters and a number\n" +
                "\n ")
        }
        if(password == confirmPassword && email.toLowerCase().match(emailMatcher) && re.test(password)){
            const opts = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password
                })
            }
            fetch('http://localhost:5000/signup', opts)
                .then(resp => {
                    if (resp.status == 201)
                        return resp;
                    else setLoginError("Use already created");
                })
                .then(async data => {
                    if(data) {
                        const tokens = await data.json()
                        localStorage.setItem('accessToken', tokens.access_token)
                        localStorage.setItem('refreshToken', tokens.refresh_token)
                        await Router.push('http://localhost:3000/info')
                    }
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }
    return (
        <div>
            <Link href={"/"} passHref>
                <Styles.backBtn>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Styles.backBtn>
            </Link>
            <Styles.container>
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
                    <input
                        type={"password"}
                        id={"confirm"}
                        name={"confirm"}
                        placeholder={"CONFIRM PASSWORD"}
                        value={confirmPassword}
                        onChange={(e) => setconFirmPassword(e.target.value)}
                    />
                    {loginError && loginError !="" ? loginError : ""}

                    <button onClick={handleSubmit}>SIGN UP</button>
            </Styles.container>
        </div>
    )

}