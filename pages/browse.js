import Head from "next/head";
import Header from "../components/Navigation/Header";

export default function Browse(data) {
    console.log(data)
    return (
        <div>
            <Header title={"Browse Artists"}/>
            <Head>
                <title>Browse Artists</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Artists and Genres go here</h1>
            <p>{data.data.status}</p>
        </div>
    )}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:5000/`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}