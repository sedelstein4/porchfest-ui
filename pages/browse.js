import Head from "next/head";
import Header from "../components/Navigation/Header";

export default function Browse() {
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
    );}