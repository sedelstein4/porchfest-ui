import styled from 'styled-components'
import Header from "../../components/Navigation/Header";
import Head from "next/head";

const Artist = ({ author, posts }) => {
    return (
        <div className="content">
            <Head>
                <title>Artist Name</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title={"Artist Name"}/>
        </div>
    )
}

export default Artist
