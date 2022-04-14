import {backendEndpoint} from "../Config";

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
    },
    getUserProfile(access_token){
        return fetch(backendEndpoint + `user_profile`,{
            method: 'GET',
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
    },
    updateUserGeoTracking(access_token){
        return fetch(backendEndpoint + `update_user_geo_tracking`,{
            method: 'GET',
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
    },
    deleteAccount(access_token){
        return fetch(backendEndpoint + `delete_user`,{
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
    },
    updateUserToArtist(artistID, token){
        return fetch(backendEndpoint + `update_user_to_artist`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({
                "artist_id": artistID,
            })
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }else{
                    return '401'
                }

            })
            .catch(error => {
                console.error(error);
            })
    },
    getUserSavedArtists(token){
        return fetch(backendEndpoint + 'get_user_saved_artists', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }else{
                    return '401'
                }

            })
            .catch(error => {
                console.error(error);
            })
    }



}

export default UserAPI
