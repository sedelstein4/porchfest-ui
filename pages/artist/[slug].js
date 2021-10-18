import styled from 'styled-components'
import Header from "../../components/Navigation/Header";
import Head from "next/head";

const ArtistImage = styled.img`
    grid-column: span 4;
    margin: 20px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1024px) {
        padding-top: 40px;
        flex-direction: column;
    }
`

const AuthorImage = styled.img`
    width: 175px;
    height: 175px;
    object-fit: cover;
    margin-right: 20px;
`

const AuthorName = styled.h1`
    margin: -10px 0 0 0;

    @media (max-width: 1024px) {
        margin: 0;
        text-align: center;
    }
`

const City = styled.p`
    font-size: 34px;
    padding: 0 15px;
`

const Artist = ({ post }) => {
    return (
        <div className="content">
            <Head>
                <title>Artist Name</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title={"Artist Name"}/>
            <ArtistImage src={data.data.photo}
                         alt={data.data.name}/>
        </div>
    )
}

export async function getStaticPaths() {
    // get all artist names here in array
    const names = ['post-malone', 'artist-two']

    const paths = names.map(name => `/artist/${name}`)

    return { paths, fallback: false }
}

export async function getStaticProps({ context }) {
    const slug = context.params
    const res = fetch(`http://localhost:5000/api/${slug}`)
    // return { props }
    // const res = await fetch(`http://localhost:5000/artist/${params.id}`)
    const data = await res.json()

    // Pass post data to the page via props
    return { props: { data } }
}

export default Artist
