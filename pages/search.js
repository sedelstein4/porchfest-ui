import Head from "next/head";
import Header from "../components/Navigation/Header";
import SearchBar from "../components/Search/SearchBar"
import * as Styles from "../components/Search/styles"
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import Default from "../layouts/default";


export default function Search(data) {
    console.log(data)
    return (
        <div>
            <div className="content">
                <Head>
                    <title>Search</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            </div>
            <SearchBar/>
            {/*    temporary 'result' to show styling*/}
            <Styles.resultContainer>
                <img
                    src={"/images/profile.jpeg"}
                />
                <div>
                    <Styles.resultName>The Rockstars</Styles.resultName>
                    <Styles.resultType>Rock band</Styles.resultType>
                </div>
                <Styles.resultIcon>
                    <FontAwesomeIcon icon={faAngleRight}/>
                </Styles.resultIcon>
            </Styles.resultContainer>

        </div>
    )}

Search.getLayout = function getLayout(page) {
    return (
        <Default title={"Search"} pageType={"search"}>
            {page}
        </Default>
    )
}