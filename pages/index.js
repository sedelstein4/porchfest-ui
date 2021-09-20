import Head from "next/head";
import Header from "../components/Browse/Heading";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Porchfest</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
        </div>
    );}