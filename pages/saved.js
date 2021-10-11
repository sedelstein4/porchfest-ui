import Head from "next/head";
import Header from "../components/Navigation/Header";

export default function Saved(data) {
    console.log(data)
    return (
        <div className="content">
            <Header title={"Saved Artists"}/>
            <Head>
                <title>Saved Artists</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Saved artists go here</h1>
        </div>
    )}