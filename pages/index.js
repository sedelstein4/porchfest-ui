import Head from "next/head";
import Header from "../components/Navigation/Header";

export default function Home() {
    return (
        <div className="Content">
            <Head>
                <title>Porchfest</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title={"Home page"}/>
        </div>
    );}