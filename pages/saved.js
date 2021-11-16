import Head from "next/head";
import Header from "../components/Navigation/Header";
import Default from "../layouts/default";

export default function Saved(data) {
    console.log(data)
    return (
        <div className="content">
            <Head>
                <title>Saved Artists</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Saved artists go here</h1>
        </div>
    )}

Saved.getLayout = function getLayout(page) {
    return (
        <Default title={"Saved Artists"}>
            {page}
        </Default>
    )
}