import Head from "next/head";
import Header from "../components/Navigation/Header";

export default function Browse(data) {
    return (
        <div>
            <Header title={"Browse Artists"}>
            </Header>
            <Head>
                <title>Porchfest</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Artists and Genres go here</h1>
        </div>
    )}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:5000/`)
    const data = await res.json()
    console.log(data)

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}