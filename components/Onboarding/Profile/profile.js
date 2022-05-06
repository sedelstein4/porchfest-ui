import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft, faQuestionCircle} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Router, {useRouter} from "next/router";
import {backendEndpoint, frontendEndpoint} from "../../../Config";
import UserAPI from "../../../api/UserAPI";
import ReactTooltip from "react-tooltip";


export default function Profile(props) {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [geoTracking, setGeoTracking] = useState(false)
    const [blurSetting, setBlurSetting] = useState(true)
    const [clickDeleteButton, setClickDeleteButton] = useState(false)
    const [isMounted,setIsMounted] = useState(false);


    useEffect(()=> {
        setIsMounted(true)
        const data = localStorage.getItem('accessToken');
        if(data){
            UserAPI.getUserProfile(data).then((resp) => {
                const userData = resp
                setGeoTracking(userData.trackLocation)
                setEmail(userData.email)
            })
        }
    })
    const updateGeoLocationPerms = () => {
        const data = localStorage.getItem('accessToken');
        if(data){
            UserAPI.updateUserGeoTracking(data).then((resp) => {
                setGeoTracking(resp)
            })
        }
    }

    const updateBlurSetting = () => {
        const data = localStorage.getItem('accessToken')
        if(data){
            UserAPI.updateUserBlurSetting(data).then((resp) => {
                setBlurSetting(resp)
            })
        }

    }

    const removeTokens = () => {
        localStorage.clear()
    }

    const deleteAccountTrue = () =>{
        setClickDeleteButton(!clickDeleteButton)
    }
    const deleteAccount = () => {
        const data = localStorage.getItem('accessToken');
        if(data){
            UserAPI.deleteAccount(data).then((resp) => {
                localStorage.clear()
                setClickDeleteButton(!clickDeleteButton)
            })
        }
    }
    return (
        <Styles.container>
            <Styles.header>
                <Link href={"/info"} passHref>
                    <Styles.backBtn onClick={() => Router.push(frontendEndpoint + 'info')}>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </Styles.backBtn>
                </Link>
                <Styles.title>User Profile</Styles.title>
            </Styles.header>
            <Styles.infoRow>
                <Styles.infoType>Email</Styles.infoType>
                <Styles.infoValue>{email}</Styles.infoValue>
            </Styles.infoRow>
            <Styles.infoRow>
                <Styles.infoType>Track Location</Styles.infoType>
                <Styles.infoValue>
                    <input
                        onClick={() => updateGeoLocationPerms()}
                        checked={geoTracking}
                        type={"checkbox"}
                        readOnly
                    />

                </Styles.infoValue>
            </Styles.infoRow>
            <Styles.infoRow>
                <Styles.infoType>Blur on proximity
                    {isMounted && <ReactTooltip id={"blurTip"} effect={"solid"} clickable={true}/>}
                    <span data-tip={"Engage with the music! Bands might not like you looking at your phone."} data-for={"blurTip"}>
                        <Styles.toolTip>
                    <FontAwesomeIcon icon={faQuestionCircle}/>
                        </Styles.toolTip>
                    </span>

                </Styles.infoType>
                <Styles.infoValue>
                    <input
                        onClick={() => updateBlurSetting()}
                        checked={blurSetting}
                        type={"checkbox"}
                        readOnly
                    />

                </Styles.infoValue>
            </Styles.infoRow>

            <Styles.buttonDiv onClick={removeTokens}>
                <Link href={"/"} passHref>
                    <Styles.signout>Sign out</Styles.signout>
                </Link>
            </Styles.buttonDiv>
            {/*<Styles.buttonDiv>*/}
            {/*        <Styles.signout>Contact form</Styles.signout>*/}
            {/*</Styles.buttonDiv>*/}
            <Styles.buttonDiv onClick={deleteAccountTrue}>
                    <Styles.signout>Delete Account</Styles.signout>
            </Styles.buttonDiv>
            {clickDeleteButton ?  <Styles.buttonDiv onClick={deleteAccount}>
                <Link href={"/"} passHref>
                <Styles.signoutTwo>Delete Account?</Styles.signoutTwo>
                </Link>
            </Styles.buttonDiv> :  null}

        </Styles.container>
        
    )

}