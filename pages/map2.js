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

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2VkZWxzdGVpbjQiLCJhIjoiY2wwNjFtM2YxMjNmaTNrbmZyeXp3Nm5uciJ9.Wit4Sb6saoQxekjXLZD-kw'; // Set your mapbox token here

function openModal(bandName){

}

export default function Map2() {
    const [opened, setOpened] = useState(false);

    return (
        <div>
            <Head>
                <title>react-map-gl example</title>
            </Head>

            <Map
                initialViewState={{
                    latitude: 42.44242,
                    longitude: -76.49921,
                    zoom: 14,
                    width: "100%",
                    height: "100vh"
                }}
                style={{height: "100vh",
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

                <Marker
                    longitude={-76.510}
                    latitude={42.4410}
                    onClick={() => setOpened(true)}
                />

                <Modal
                    opened={opened}
                    onClose={() => setOpened(false)}
                    title="Introduce yourself!"
                >
                    <p>Text</p>
                </Modal>
            </Map>
        </div>
    );
}