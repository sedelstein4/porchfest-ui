export function getSort(type) {
    return fetch('http://localhost:5000/artists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            Authorization: 'Bearer ',
        },
        body: JSON.stringify({sort: type}),
    })
    // .then((response) => {
    //     if (response.status === 401) {
    //         window.location.href = 'http://localhost:3000'
    //     }
    //     return response.json()
    // })
    // .catch((error) => {
    //         window.location.href = 'http://localhost:3000'
    // })
}