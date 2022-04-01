export const environment = process.env.REACT_APP_ENVIRONMENT

// define endpoints based on environment
export let backendEndpoint
export let frontendEndpoint

if (environment === 'prod') {
    backendEndpoint = 'https://test.anime.technology/'
    frontendEndpoint = 'https://d2zdtmtdrz0btq.cloudfront.net'
} else {
    backendEndpoint = 'http://localhost:5000/'
    frontendEndpoint = 'http://localhost:3000/'
}

