import Head from "next/head";
import Header from "../components/Navigation/Header";

export default function Info(data) {
    console.log(data)
    return (
        <div className="content">
            <Header title={"Event Information"}/>
            <Head>
                <title>Porchfest 2021</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Event info goes here</h1>
        </div>
    )}