import Navigation from '../components/Navigation/Navigation'
import Header from "../components/Navigation/Header";

export default function Default(props) {
    return (
        <>
            {/*<Header />*/}
            <main>{props.children}</main>
            <Navigation />
        </>
    )
}
