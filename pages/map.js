import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
// import * as L from "leaflet.locatecontrol"

export default function map(props) {
    const Map = dynamic(
        () => import('/components/Event/Map/Map'),
        { ssr: false } // This line is important. It's what prevents server-side render
    )
    return <Map />

}