import {backendEndpoint} from "../../Config";

const SortAPI = {
    getSort() {
        return fetch(backendEndpoint + 'artists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                Authorization: 'Bearer ',
            },
            body: JSON.stringify({type: 'genre'}),
        })
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                console.error(error)
                return error
            })
    }
}

export default SortAPI