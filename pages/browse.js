import Head from "next/head";
import Header from "../components/Navigation/Header";
import * as Styles from "../components/Browse/styles";
import Link from "next/link";

export default function Browse(data) {
    if (data.artistData[0].name) {
        return (
            <div className="content">
                <Header title={"Browse Artists"} pageType={"browse"}/>
                <Head>
                    <title>Browse Artists</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                {data.genreData.slice(0, 6).map((genre, i) => {
                        return (
                            <Styles.rowContainer key={data.artistData.id}>
                                <Styles.genre>
                                    {genre}
                                </Styles.genre>
                                <Styles.row>
                                    {data.artistData.filter((item) => item.genre[0] === genre).slice(0, 3).map((artist, i) => {
                                        return (
                                            <Styles.cardContainer key={artist.id}>
                                                <Link href="/artist/[slug]" as={`/artist/${artist.url_slug}`} passHref>
                                                    <a>
                                                        <img
                                                            src={artist.photo ? artist.photo : "/images/profile.jpeg"}
                                                            alt={artist.name}
                                                            width="100%"
                                                            height="100%"
                                                        />
                                                    </a>
                                                </Link>
                                                <Styles.name>
                                                    <Link href="/artist/[slug]" as={`/artist/${artist.url_slug}`} passHref>
                                                        <a>
                                                            {artist.name}
                                                        </a>
                                                    </Link>
                                                </Styles.name>
                                            </Styles.cardContainer>
                                        )
                                    })}
                                </Styles.row>
                            </Styles.rowContainer>
                        )
                    }
                )}
                {/*{componentLoop(data)}*/}
            </div>
        )
    }
}


        // export function componentLoop(data) {
        //     let genres = ["Rock", "Indie", "Pop"];
        //     let artistNames = [data.data.name, "Gladiators", "Tom and the Boys", "The Candlesticks", "Blue Days", "The Sunspots"];
        //     let artistGenres = ["Rock", "Rock", "Rock", "Indie", "Indie", "Indie"]
        //     let rowList = [];
        //
        //     genres.forEach((genre) => {
        //         let cardList = [];
        //         artistNames.forEach((name, index) => {
        //             if (artistGenres[index] === genre) {
        //                 cardList.push(<ArtistCard imgPath={data.data.photo} name={name} slug={data.data.slug}/>)
        //             }
        //         })
        //         rowList.push(<CardRow genre={genre}>{cardList}</CardRow>)
        //     })
        //     return rowList;
        //
        // }

        export async function getStaticProps( context ) {
            const artistRes = await fetch(`http://localhost:5000/artists`)
            const genreRes = await fetch(`http://localhost:5000/genres`)

            const artistData = await artistRes.json()
            const genreData = await genreRes.json()

            return {
                props: {
                    artistData,
                    genreData
                }
            }
        }
