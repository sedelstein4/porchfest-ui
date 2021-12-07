import Head from "next/head";
import React from "react";
import Navigation from "../components/Navigation/Navigation";
import dynamic from "next/dynamic";

export default function map(props) {
    const Map = dynamic(
        () => import('/components/Event/Map/Map'),
        { ssr: false } // This line is important. It's what prevents server-side render
    )
    return <Map />

}