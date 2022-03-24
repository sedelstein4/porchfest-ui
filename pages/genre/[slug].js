import styled from 'styled-components'
import Header from "../../components/Navigation/Header";
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faAngleRight, faGlobe} from "@fortawesome/free-solid-svg-icons";
import Default from "../../layouts/default";
import Link from "next/link";
import {icon} from "../../components/Search/styles";


const ResultContainer = styled.div`
  display:flex;
  align-items: center;
  border-bottom: 1px solid var(--grey-mid);
  padding: 15px 0;
  
  a{
    display: inline-flex;
    align-items: center;
    width: 100%;
  }
  
    img{
      width:50px;
      height:50px;
      object-fit: cover;
      object-position: top center;
      border-radius: 50%;
      border: 1px solid var(--grey-dark);
      margin-right: 15px;
      //margin: 18px 24px 16px 12px;
    }
  `

const ResultName = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 24px;
  `

const ResultIcon = styled(icon)`
    margin-left: auto;
    svg{
      width:18px;
    }
`

const Genre = ({ data }) => {
    const genreData = Object.values(data[0])[0]

    return (
        <div className="content">
            <Head>
                <title>Porchfest - {Object.keys(data[0])[0]}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header pageType={"genre"} title={Object.keys(data[0])[0]} />
            {genreData.slice(0).map((artist, i) => {
                return (
                    <ResultContainer key={artist.id}>
                        <Link href="/artist/[slug]" as={`/artist/${artist.url_slug}`}
                              passHref>
                            <a>
                                <img
                                    src={artist.photo ? artist.photo : "/images/profile.jpeg"}
                                    alt={artist.name}
                                    width="100%"
                                    height="100%"
                                />
                                <ResultName>{artist.name}</ResultName>
                                <ResultIcon>
                                    <FontAwesomeIcon icon={faAngleRight}/>
                                </ResultIcon>
                            </a>
                        </Link>
                    </ResultContainer>
                )
            })
            }
        </div>
    )
}

export async function getStaticPaths() {
    // get all artist names here in array
    const res = await fetch('http://localhost:5000/genres')
    const names = await res.json()

    // const paths = names.map(url_slug => `/artist/${url_slug}`)
    const paths = names.map(name => ({ params: { slug: name.slug } }));

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const { slug } = params
    const res = await fetch(`http://localhost:5000/genre/${slug}`)
    const data = await res.json()

    // Pass post data to the page via props
    return {
        props: { data }, // will be passed to the page component as props
    }
}

Genre.getLayout = function getLayout(page) {
    return (
        <Default title={"Genre"}>
            {page}
        </Default>
    )
}

export default Genre
