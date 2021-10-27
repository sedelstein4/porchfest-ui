import Head from "next/head";
import Header from "../components/Navigation/Header";
import Sort from "../components/Browse/Sort/sort";
import * as Styles from "../components/Browse/styles";
import Link from "next/link";

export default function Browse(data) {
    let genres = ["Rock", "Indie", "Pop"];
    console.log(data)
    if (data.data[0].name) {
        return (
            <div className="content">
                {/*<Header title={"Browse Artists"}/>*/}
                {/*<Head>*/}
                {/*    <title>Browse Artists</title>*/}
                {/*    <link rel="icon" href="/favicon.ico" />*/}
                {/*</Head>*/}
                {genres.slice(0, 3).map((genre, i) => {
                        return (
                            <Styles.rowContainer key={data.data.id}>
                                <Styles.genre>
                                    {genre}
                                </Styles.genre>
                                <Styles.row>
                                    {data.data.slice(0, 3).map((artist, i) => {
                                        return (
                                            <Styles.cardContainer key={artist.id}>
                                                <Link href="/artist/[slug]" as={`/artist/${artist.name}`} passHref>
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
                                                    {artist.name}
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


        export function componentLoop(data) {
            let genres = ["Rock", "Indie", "Pop"];
            let artistNames = [data.data.name, "Gladiators", "Tom and the Boys", "The Candlesticks", "Blue Days", "The Sunspots"];
            let artistGenres = ["Rock", "Rock", "Rock", "Indie", "Indie", "Indie"]
            let rowList = [];

            genres.forEach((genre) => {
                let cardList = [];
                artistNames.forEach((name, index) => {
                    if (artistGenres[index] === genre) {
                        cardList.push(<ArtistCard imgPath={data.data.photo} name={name} slug={data.data.slug}/>)
                    }
                })
                rowList.push(<CardRow genre={genre}>{cardList}</CardRow>)
            })
            return rowList;

        }

        export async function getStaticProps(context) {
            const res = await fetch(`http://localhost:5000/`)
            const data = await res.json()

            if (!data) {
                return {
                    notFound: true,
                }
            }

            return {
                props: {data}, // will be passed to the page component as props
            }
        }

//TODO sorter methods, get events or data from components to handle showing/hiding sort picker & sorting
// look into state hooks more,
//maybe https://stackoverflow.com/questions/54264486/pass-props-to-another-component-onclick-of-a-button
    //and https://nextjs.org/docs/basic-features/data-fetching - incremental static regeneration?
