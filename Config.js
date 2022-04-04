export const environment = process.env.REACT_APP_ENVIRONMENT

// define endpoints based on environment
export let backendEndpoint
export let frontendEndpoint

if (environment === 'prod') {
    backendEndpoint = 'https://api.porchfest.live/'
    frontendEndpoint = 'https://porchfest.live/'
} else {
    backendEndpoint = 'http://localhost:5000/'
    frontendEndpoint = 'http://localhost:3000/'
}

