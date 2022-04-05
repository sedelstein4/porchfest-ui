import {backendEndpoint} from "../Config";
import Router from "next/router";


const UserAPI = {
    getNewToken(access_token){
        return fetch(backendEndpoint + `refresh`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                Authorization: 'Bearer ' + access_token
            }
        })
            .then(res => {
                return res.json()
            })
            .catch(error => {
                console.error(error);
            })
        const opts = {

        }
        fetch(backendEndpoint + `refresh`, opts)

    }
}

export default UserAPI
