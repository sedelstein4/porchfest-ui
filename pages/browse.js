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
            {componentLoop()}
            <p>{data.data.status}</p>
        </div>
    )}



export function componentLoop(){
    let genres =["Rock","Indie","Pop"];
    let artists =["The Rockstars","Gladiators","Tom and the Boys"];
    let rowList =[];

    genres.forEach((genre, index)=>{
        let cardList =[];
        artists.forEach((artist, index)=>{
            cardList.push(<ArtistCard imgPath={'/images/profile.jpeg'} name={artist}/>)
        })
        rowList.push( <CardRow genre={genre}>{cardList}</CardRow>)
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
        props: { data }, // will be passed to the page component as props
    }
}