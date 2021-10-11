import Head from "next/head";
import Header from "../components/Navigation/Header";
import ArtistCard from "../components/Browse/ArtistCard/ArtistCard";
import CardRow from "../components/Browse/CardRow/CardRow";

export default function Browse(data) {
    console.log(data)
    return (
        <div className="content">
            <Header title={"Browse Artists"}/>
            <Head>
                <title>Browse Artists</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {componentLoop(data)}
            <p>{data.data.status}</p>
        </div>
    )}



export function componentLoop(data){
    let genres =["Rock","Indie","Pop"];
    let artistNames =[data.data.name,"Gladiators","Tom and the Boys", "The Candlesticks", "Blue Days", "The Sunspots" ];
    let artistGenres =["Rock", "Rock", "Rock", "Indie", "Indie", "Indie"]
    let rowList =[];

    genres.forEach((genre)=>{
        let cardList =[];
        artistNames.forEach((name, index)=>{
            if (artistGenres[index] === genre){
                cardList.push(<ArtistCard imgPath={data.data.photo} name={name}/>)
            }
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