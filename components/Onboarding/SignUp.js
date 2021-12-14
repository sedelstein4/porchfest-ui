import React from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import {useRouter} from "next/router";


export default function SignUp(props) {
    const router = useRouter();
    const handleSubmit = event => {
        event.preventDefault();
        const response = fetch('http://localhost:5000/login')
        router.push('/selectGenres');
        //return
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
                <form method="post" onSubmit={handleSubmit}>
                    <input
                        type={"text"}
                        id={"email"}
                        name={"email"}
                        placeholder={"EMAIL"}
                    />
                    <input
                        type={"password"}
                        id={"pass"}
                        name={"pass"}
                        placeholder={"PASSWORD"}
                    />
                    <input
                        type={"password"}
                        id={"confirm"}
                        name={"confirm"}
                        placeholder={"CONFIRM PASSWORD"}
                    />
                    <input
                        type={"submit"}
                        id={"submit"}
                        name={"submit"}
                        value={"SIGN UP"}
                    />
                </form>

            </Styles.container>
        </div>
    )

}