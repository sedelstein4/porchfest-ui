import {backendEndpoint} from "../Config";

const ArtistAPI = {
    getArtistLikedToUser(slug,token){
        return fetch(backendEndpoint + `artist/${slug}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                "access_token": token,
            })
        })
            .then(res => {
                return res.json()
            })
            .catch(error => {
                console.error(error);
            })
    },
    getArtists(type){
        return fetch(backendEndpoint + 'artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                Authorization: 'Bearer ',
            },
            body: JSON.stringify({type: type}),
        })
            .then(res => {
                return res.json()
            })
            .catch(error => {
                console.error(error);
            })
    }
}

export default ArtistAPI