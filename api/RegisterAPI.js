import {backendEndpoint} from "../Config";

const RegisterAPI = {
    login(email, password){
        return fetch(backendEndpoint + `login`,{
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(res => {
                if (res.status === 201) {
                    return res.json()
                }else{
                    return '401'
                }
            })
            .catch(error => {
                console.error(error);
            })
    },
    signUp(email, password, geoTracking){
        return fetch(backendEndpoint + 'signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password,
                "geo_Tracking": geoTracking
            })
        })
            .then(res => {
            if (res.status === 201) {
                return res.json()
            }else{
                return 'error'
            }
        })
            .catch(error => {
                console.error(error);
            })
    },
    sendPasswordReset(email){

        return fetch(backendEndpoint + 'send_password_reset',{
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email
            })
        })
            .then(res => {
                console.log(res)
            if (res.status === 200) {
                return '200'
            }else{
                return '404'
            }
        })
            .catch(error => {
                // console.error(error);
            })
    }



}

export default RegisterAPI
