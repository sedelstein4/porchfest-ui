import Head from "next/head";
import Header from "../components/Navigation/Header";

export default function Search(data) {
    console.log(data)
    return (
        <div>
            <Header title={"Search"}/>
            <Head>
                <title>Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Search go here</h1>
        </div>
    )}