import Head from "next/head";
import React from "react";
import * as Styles from "../components/Onboarding/Interests/styles"

export default function selectGenres(data) {
    console.log(data.genreData)
    if (data.genreData[0].name) {
        return (
            <div className={"content"}>
                <Head>
                    <title>Select Artists</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Styles.Header>Select Your Music Interests</Styles.Header>
                <Styles.Checklist>
                    <form>
                        {data.genreData.slice(0).map((genre, i) => {
                            return (
                                <Styles.selection htmlFor={genre.name}>{genre.name}
                                    <input type={"checkbox"} id={genre.name}/>
                                    <Styles.checkmark/>
                                </Styles.selection>
                            )
                        })}
                    </form>
                </Styles.Checklist>
            </div>
        )
    }
}

export async function getStaticProps( context ) {
    const genreRes = await fetch(`http://localhost:5000/genres`);
    const genreData = await genreRes.json()

    return {
        props: {
            genreData
        }
    }
}