import GlobalStyle from '../styles/GlobalStyle'
// import { useStore } from '../store/index'

const MyApp = ({ Component, pageProps }) => {
    // const store = useStore(pageProps.initialReduxState)

    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(
        <>
        <GlobalStyle />
            <Component {...pageProps} />
    </>
    )
}

export default MyApp

