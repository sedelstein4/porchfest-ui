// import Header from '../components/Site/Header/Header'
import Navigation from '../components/Navigation/Navigation'

export default function Default(props) {
    return (
        <>
            {/*<Header />*/}
            <main>{props.children}</main>
            <Navigation />
        </>
    )
}
