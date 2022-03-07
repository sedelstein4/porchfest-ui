import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("")


    useEffect(()=> {
        const data = localStorage.getItem('accessToken');
        if(data){
            setToken(data)
        }
    })

    const handleSubmit = () => {
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
        fetch('http://localhost:5000/token', opts)
            .then(resp =>{
                if(resp.status == 200) return resp.json();
                else alert("There has been some error");
            })
            .then(data =>{
                console.log(data.access_token)
                localStorage.setItem('accessToken',data.access_token)
            })
            .catch(error =>{
                console.error("There was an error");
            })

    }

    return (
        <div>
            <Link href={"/info"} passHref>
                <Styles.backBtn>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Styles.backBtn>
            </Link>
            <Styles.container>
                <Styles.title>Porchfest</Styles.title>

                {(token && token!="" && token!=undefined) ? (
                    "Logged in with token") :(

                    <form method="post" onSubmit={handleSubmit}>
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
                    <input
                    type={"submit"}
                    id={"submit"}
                    name={"submit"}
                    value={"SIGN IN"}
                    />
                    </form>
                    )}


            </Styles.container>
        </div>
    )

}

