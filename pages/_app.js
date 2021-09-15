import GlobalStyle from '../styles/GlobalStyle'
import Default from '../layouts/default'

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <GlobalStyle />
                <Default>
                    <Component {...pageProps} />
                </Default>
        </div>
    );
}

export default MyApp;
