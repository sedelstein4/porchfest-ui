import styled from 'styled-components'
import Head from "next/head";
import React from "react";
import * as Styles from "../components/Event/Info/styles";
import HomeComponent from "../components/Onboarding/Home/Home";

export default function Home() {
    return (
        <div className="Content">
            <Head>
                <title>Porchfest</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*<Header title={"Home page"}/>*/}
            <Styles.fullWidthImgDiv>
                <img
                    src="/images/coverphoto.png"
                    alt="Porchfest"
                    width="100%"
                    height="100%"
                />
            </Styles.fullWidthImgDiv>
            <HomeComponent/>
        </div>
    );}