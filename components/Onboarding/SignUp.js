import React from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default function SignUp(props) {
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