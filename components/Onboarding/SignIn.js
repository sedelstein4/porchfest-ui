import React from 'react'
import * as Styles from './styles'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SignIn(props) {
    return (
        <div>
            <Styles.backBtn>
                <FontAwesomeIcon icon={faArrowLeft}/>
            </Styles.backBtn>
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
                    <Styles.forgotLink>Forgot password?</Styles.forgotLink>
                    <input
                        type={"submit"}
                        id={"submit"}
                        name={"submit"}
                        value={"SIGN IN"}
                    />
                </form>

            </Styles.container>
        </div>
    )

}