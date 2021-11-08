import styled from 'styled-components'
import Header from "../../components/Navigation/Header";
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faApple, faFacebookSquare, faInstagramSquare, faSpotify} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";

const ArtistImageDiv = styled.div`
  display: inline-block;
  margin: 20px 0;
  width: 100%;
  height: 20vw;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.imageSrc});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

`

const ArtistImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 3px;
  border: 1px solid var(--grey-middark);
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
    return (
        <div className="content">
            <Head>
                <title>Porchfest - {data.artist.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header pageType={"artist"} title={data.artist.name} hometown={data.artist.hometown}/>
            <ArtistImageDiv imageSrc={data.artist.photo ? data.artist.photo : "/images/profile.jpeg"}>
                {/*<ArtistImage src={data.artist.photo ? data.artist.photo : "/images/profile.jpeg"} alt={data.artist.name}/>*/}
            </ArtistImageDiv>
            <SocialMediaGrid>
                {data.artist.facebook ? <FontAwesomeIcon icon={faFacebookSquare} /> : null}
                {data.artist.instagram ? <FontAwesomeIcon icon={faInstagramSquare} /> : null}
                {data.artist.spotify ? <FontAwesomeIcon icon={faSpotify} /> : null}
                {data.artist.apple ?  <FontAwesomeIcon icon={faApple} /> : null}
                <FontAwesomeIcon icon={faGlobe} />
            </SocialMediaGrid>
            <ArtistAbout>{data.artist.about}</ArtistAbout>
        </div>
    )
}

export async function getStaticPaths() {
    // get all artist names here in array
    const names = [await fetch(`http://localhost:5000/artists`)]

    const paths = names.map(url_slug => `/artist/${url_slug}`)

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
