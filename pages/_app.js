import GlobalStyle from '../styles/GlobalStyle'
import Default from '../layouts/default'
// import { useStore } from '../store/index'

const MyApp = ({ Component, pageProps }) => {
    // const store = useStore(pageProps.initialReduxState)

    return (
        <>
            <GlobalStyle />
                <Default>
                    <Component {...pageProps} />
                </Default>
        </>
    )
}

export default MyApp

