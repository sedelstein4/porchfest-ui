import Navigation from '../components/Navigation/Navigation'
import Header from "../components/Navigation/Header";

export default function Default(props) {
    return (
        <>
            <Header title={props.title} pageType={props.pageType} />
            <main>{props.children}</main>
            <Navigation />
        </>
    )
}
