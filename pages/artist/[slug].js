import styled from 'styled-components'
import Header from "../../components/Navigation/Header";
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faApple, faFacebookSquare, faInstagramSquare, faSpotify} from "@fortawesome/free-brands-svg-icons";

const ArtistImage = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 20px;
  width: 75%;
`

const SocialMediaGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  
  svg {
    width: 45px !important;
    height: 45px !important;
    margin-left: 7px;
    margin-right: 7px;
  }
`

const ArtistAbout = styled.p`
  margin: 0;
  text-align: center;
  font-size: 1.25em;
`

const Artist = ({ data }) => {
    console.log(data)
    return (
        <div className="content">
            <Head>
                <title>Porchfest - {data.artist.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header pageType={"artist"} title={data.artist.name}/>
                <ArtistImage src={data.artist.photo ? data.artist.photo : "/images/profile.jpeg"}
                             alt={data.artist.name}/>
            <SocialMediaGrid>
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faInstagramSquare} />
                <FontAwesomeIcon icon={faSpotify} />
                <FontAwesomeIcon icon={faApple} />
            </SocialMediaGrid>
            <ArtistAbout>{data.artist.about}</ArtistAbout>
        </div>
    )
}

export async function getStaticPaths() {
    // get all artist names here in array
    const names = [await fetch(`http://localhost:5000/artists`)]

    const paths = names.map(name => `/artist/${name}`)

    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const { slug } = params
    const res = await fetch(`http://localhost:5000/artist/${slug}`)
    const data = await res.json()

    // Pass post data to the page via props
    return {
        props: { data }, // will be passed to the page component as props
    }
}

export default Artist
