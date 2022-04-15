import React, {useEffect, useState} from 'react'
import * as Styles from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Router, {useRouter} from "next/router";
import {backendEndpoint, frontendEndpoint} from "../../../Config";
import UserAPI from "../../../api/UserAPI";


export default function Profile(props) {
    const router = useRouter()
    const [email, setEmail] = useState("");
    const [geoTracking, setGeoTracking] = useState(false)
    const [clickDeleteButton, setClickDeleteButton] = useState(false)

    useEffect(()=> {
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

            <Styles.buttonDiv onClick={deleteAccountTrue}>
                    <Styles.signout>Delete Account</Styles.signout>
            </Styles.buttonDiv>
            {clickDeleteButton ?  <Styles.buttonDiv onClick={deleteAccount}>
                <Link href={"/"} passHref>
                <Styles.signout>Delete Account?</Styles.signout>
                </Link>
            </Styles.buttonDiv> :  null}


            <Styles.buttonDiv onClick={removeTokens}>
                <Link href={"/"} passHref>
                    <Styles.signout>SIGN OUT</Styles.signout>
                </Link>
            </Styles.buttonDiv>

        </Styles.container>
        
    )

}