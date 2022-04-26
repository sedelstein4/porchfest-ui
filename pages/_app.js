import GlobalStyle from '../styles/GlobalStyle'

const MyApp = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(
        <>
        <GlobalStyle />
            <Component {...pageProps} />
    </>
    )
}

export default MyApp

