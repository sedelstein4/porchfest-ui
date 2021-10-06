import Head from "next/head";
import Header from "../components/Navigation/Header";
import ArtistCard from "../components/Browse/ArtistCard";
import CardRow from "../components/Browse/CardRow/CardRow";

export default function Browse(data) {
    console.log(data)
    return (
        <div>
            <Header title={"Browse Artists"}/>
            <Head>
                <title>Browse Artists</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CardRow genre={"Rock"}>
                <ArtistCard imgPath={data.data.photo} name={data.data.name}/>
                <ArtistCard imgPath={'/images/profile.jpeg'} name={"Gladiators"}/>
                <ArtistCard imgPath={'/images/profile.jpeg'} name={"Tom and the Boys"}/>
            </CardRow>

            <CardRow genre={"Indie"}>
                <ArtistCard imgPath={'/images/profile.jpeg'} name={"The Candlesticks"}/>
                <ArtistCard imgPath={'/images/profile.jpeg'} name={"Blue Days"}/>
                <ArtistCard imgPath={'/images/profile.jpeg'} name={"The Sunspots"}/>
            </CardRow>

            <CardRow genre={"Pop"}>
            </CardRow>

            <p>{data.data.status}</p>
        </div>
    )}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:5000/`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data }, // will be passed to the page component as props
    }
}