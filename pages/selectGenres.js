import Head from "next/head";
import React from "react";
import GenreChecklist from "../components/Onboarding/Interests/GenreChecklist"

export default function selectGenres() {
    return (
        <div>
            <Head>
                <title>Select Artists</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <GenreChecklist/>
        </div>
    )
}

//TODO add getLayout (onboarding)