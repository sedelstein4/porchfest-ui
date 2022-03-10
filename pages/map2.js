import * as React from 'react';
import Head from 'next/head';
import Map, {
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import ArtistModal from "../components/Event/ArtistModal/ArtistModal";
import {useState} from "react";
import {Modal} from "@mantine/core";
import Navigation from "../components/Navigation/Navigation"

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2VkZWxzdGVpbjQiLCJhIjoiY2wwNjFtM2YxMjNmaTNrbmZyeXp3Nm5uciJ9.Wit4Sb6saoQxekjXLZD-kw'; // Set your mapbox token here

const blurred ={
    filter:"blur(10px)",
    //pointerEvents: "none", //TODO might be able to do this with modal's props
    // touchAction: "none",
    display:"block",
    height:"100vh", //otherwise filter will move the nav up behind the map
};
let bandText = "data1 - band";
let addrText = "data2 - address";
let timeText = "data3 - timeslot";

export default function Map2({ porchData}) {

    const [opened, setOpened] = useState(false);
    let isBlurred;
    if (opened) isBlurred = blurred;

    function openModal(i){
        bandText = porchData[1][i];
        addrText = porchData[2][i];
        timeText = porchData[3][i];
        setOpened(true);
        console.log("bandtext is: " + bandText)
    }

    function GenerateMarkers(){
        console.log(porchData);

        let markerList =[];
        for (let i = 0; i < porchData.length; i++){
            markerList.push(
                <Marker
                    key={i}
                    latitude = {porchData[0][i][0]}
                    longitude = {porchData[0][i][1]}
                    onClick={() =>
                        openModal(i)
                    }
                    >
                </Marker>
            )
        }
        return markerList;
    }
    return (
        <div>
            <Head>
                <title>react-map-gl example</title>
            </Head>
            <div style={isBlurred}>
                <Map
                    initialViewState={{
                        latitude: 42.44242,
                        longitude: -76.49921,
                        zoom: 14,
                        width: "100%",
                        height: "100vh"
                    }}
                    style={{height: "calc(100vh - 69px)", //navbar has 69px height
                        width: "100%",
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={'pk.eyJ1Ijoic2VkZWxzdGVpbjQiLCJhIjoiY2wwNjFtM2YxMjNmaTNrbmZyeXp3Nm5uciJ9.Wit4Sb6saoQxekjXLZD-kw'}
                >
                    <GeolocateControl position="top-left" />
                    <FullscreenControl position="top-left" />
                    <NavigationControl position="top-left" />
                    <ScaleControl/>
                    <Marker longitude={-76.499} latitude={42.44242} color="red"/>
                    {GenerateMarkers()}
                </Map>
                <Navigation />
            </div>
            {/*TODO try using a mantine Card instead when we get the artist image and stuff as well*/}
            <Modal
                sx={{/*TODO do styling here*/}}
                opened={opened}
                onClose={() => setOpened(false)}
                title={bandText}
                overlayOpacity={0.1}
            >
                <p> {addrText} - {bandText} <br />Playing {timeText}.</p>
            </Modal>
        </div>
    );
}

export async function getStaticProps() {
    // get all porch info for markers
    // const res = await fetch('http://localhost:5000/porches')
    // const porches = await res.json()

    //TODO this won't be the format of the database so will need to edit map component after
    let coords = [[42.446700, -76.498440], [42.444860, -76.502120], [42.449340, -76.500430], [42.422660, -76.495167]];
    let bands = ["Cielle", "The Flywheels", "Lloyd's Boys", "Jimilab Team"];
    let addrs = ["210 Utica St", "105 2nd Str", "219 Auburn St", "Williams Hall"];
    let times = ["4-5pm", "11am-12pm", "1-2pm", "3-4pm"];
    let porchData = [coords, bands ,addrs, times];

    return {
        props: {porchData}
    }
}