import React from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'


export default function SignUp(props) {
    return (
        <div>
            <Link href={"/"} passHref>
                <Styles.backBtn>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </Styles.backBtn>
            </Link>
            <Styles.container>
                <Styles.title>Porchfest</Styles.title>
                <form>
                    <input
                        type={"text"}
                        id={"email"}
                        name={"email"}
                        placeholder={"EMAIL"}
                    />
                    <input
                        type={"text"}
                        id={"pass"}
                        name={"pass"}
                        placeholder={"PASSWORD"}
                    />
                    <input
                        type={"text"}
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