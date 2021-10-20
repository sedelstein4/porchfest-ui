import Head from "next/head";
import Header from "../components/Navigation/Header";
import SearchBar from "../components/Search/SearchBar"

export default function Search(data) {
    console.log(data)
    return (
        <div className="content">
            <Header title={"Search"}/>
            <Head>
                <title>Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <SearchBar/>
        </div>
    )}