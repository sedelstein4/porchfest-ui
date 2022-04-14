import React, {useState, useEffect} from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import Router, {useRouter} from "next/router";
import {backendEndpoint, frontendEndpoint} from "../../../Config";
import ReactTooltip from 'react-tooltip';
import RegisterAPI from "../../../api/RegisterAPI";

export default function SignUp(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [geoTracking, setGeoTracking] = useState(false)
    const [confirmPassword, setconFirmPassword] = useState("")
    const [loginError,setLoginError] = useState("")
    const [isMounted,setIsMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
    });

    const handleSubmit = () => {
        const emailMatcher = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(password != confirmPassword){
            setLoginError("Password mismatch")
        }
        else if(!email.toLowerCase().match(emailMatcher)){
            setLoginError("Email format is invalid")
        }
        else if(password.length < 5){
            setLoginError(["Password Requirements:",<br/>,"At least 5 characters."])
        }
        if(password == confirmPassword && email.toLowerCase().match(emailMatcher) && password.length >= 5){
            RegisterAPI.signUp(email,password,geoTracking).then((resp)=>{
                if (resp === 'error')
                    setLoginError("Use already created")
                else{
                    const tokens = resp
                    localStorage.setItem('accessToken', tokens.access_token)
                    localStorage.setItem('refreshToken', tokens.refresh_token)
                    Router.push(frontendEndpoint + 'info')
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
            <Styles.container>
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
                </Styles.inputFields>
                <Styles.infoRow>
                    <Styles.infoType>Track Location</Styles.infoType>
                    <Styles.infoValue>
                        <input
                            onClick={() => setGeoTracking(!geoTracking)}
                            defaultChecked={geoTracking}
                            type={"checkbox"}
                        />
                    </Styles.infoValue>
                    {isMounted && <ReactTooltip id={"mytip"} effect={"solid"} />}
                    <span data-tip={"We use your location to your location to porches in your area"} data-for={"mytip"}>
                        <Styles.toolTip>
                    <FontAwesomeIcon icon={faQuestionCircle}/>
                        </Styles.toolTip>
                    </span>
                </Styles.infoRow>
                    {loginError && loginError !="" ? <Styles.loginNotice>{loginError}</Styles.loginNotice> : ""}

                    <Styles.signUpBtn onClick={handleSubmit}>SIGN UP</Styles.signUpBtn>
            </Styles.container>
        </div>
    )

}