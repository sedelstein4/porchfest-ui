import styled from 'styled-components'
import Header from "../../components/Navigation/Header";
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
import {faApple, faFacebookSquare, faInstagram, faInstagramSquare, faSpotify} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import Default from "../../layouts/default";
import Saved from "../saved";
import {backendEndpoint} from "../../Config";

const ArtistImageDiv = styled.div`
  display: block;
  margin: 95px auto 10px auto;
  width: 100%;
  max-width:550px;
  height: 20vw;
  min-height: 300px;
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

    &.insta{
      background: #d6249f !important;
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%) !important;
      color: white !important;
      border-radius: 8px !important;
      width: 42px !important;
      height: 42px !important;
      margin-top: 2px;
    }
  }
`

const ArtistAbout = styled.p`
  margin: 0;
  text-align: center;
  font-size: 1.25em;
`

async function getArtistWithUser(slug,token) {

    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            "access_token": token,
        })
    }

    const res = await fetch(backendEndpoint + `artist/${slug}`, opts)
    const data = await res.json()
    return data.liked

}

const Artist = ({ data }) => {
    return (
        <div className="content">
            <Head>
                <title>Porchfest - {data.artist.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header pageType={"artist"} title={data.artist.name} hometown={data.artist.hometown} artistID={data.artist.id} slug={data.artist.url_slug}/>


            <ArtistImageDiv imageSrc={data.artist.photo ? data.artist.photo : "/images/profile.jpeg"}>
                {/*<ArtistImage src={data.artist.photo ? data.artist.photo : "/images/profile.jpeg"} alt={data.artist.name}/>*/}
            </ArtistImageDiv>
            <SocialMediaGrid>
                {data.artist.facebook ? <a target="_blank" href={data.artist.facebook}><FontAwesomeIcon icon={faFacebookSquare} style={{color: '#4267B2'}}/></a> : null}
                {data.artist.spotify ? <a target="_blank" href={data.artist.spotify}><FontAwesomeIcon icon={faSpotify} style={{color: '#1DB954'}}/></a> : null}
                {data.artist.website ?  <a target="_blank" href={data.artist.website}><FontAwesomeIcon icon={faGlobe} /></a> : null}
            </SocialMediaGrid>
            <ArtistAbout>{data.artist.about}</ArtistAbout>
        </div>
    )
}

export async function getStaticPaths() {
    // get all artist names here in array
    const type = "alphabetical"
    const res = await fetch(backendEndpoint + 'artists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            Authorization: 'Bearer ',
        },
        body: JSON.stringify({type: type}),
    });
    const names = await res.json()

    // const paths = names.map(url_slug => `/artist/${url_slug}`)
    const paths = names.map(name => ({ params: { slug: name.url_slug } }));

    return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
    const { slug } = params
    const res = await fetch(backendEndpoint + `artist/${slug}`)
    const data = await res.json()

    // Pass post data to the page via props
    return {
        props: { data }, // will be passed to the page component as props
    }
}

Artist.getLayout = function getLayout(page) {
    return (
        <Default title={"Saved Artists"}>
            {page}
        </Default>
    )
}

export default Artist
